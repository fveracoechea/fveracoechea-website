import { ApolloClient, InMemoryCache, from, ServerError } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import { createHttpLink } from "@apollo/client/link/http";
import { setContext } from "@apollo/client/link/context";
import { TokenStorage } from '../service/TokenState';
import { IO, chain } from 'fp-ts/lib/IO';
import { pipe } from 'fp-ts/lib/pipeable';
import * as TE from 'fp-ts/lib/TaskEither';
import { Authentication } from '../types/Auth';
import { authenticate, refresh } from './auth/api';
import * as T from 'fp-ts/lib/Task';
import { HttpError } from '../types/Directus';

const getUri = (token: string) => process.env.NEXT_PUBLIC_DIRECTUS_GRAPHQL!.concat(`?access_token=${token}`);
const errorLog = (error: HttpError): IO<void> => () => console.error(error);
const setToken = (token: string): IO<string> => () => TokenStorage.setToken(token);

const resetToken = onError(({ networkError, forward, operation }) => {
  const isNotAuthenticated: IO<boolean> = () => (
    Boolean(networkError) &&
    networkError!.name === 'ServerError' &&
    (networkError as ServerError).statusCode === 401
  );
  const invalidate: IO<void> = () => TokenStorage.invalidate();
  const retry: IO<any> = () => forward(operation);
  const errorCase = chain(() => retry)(invalidate);
  const successCase: IO<void> = () => {};
  const computation = chain(x => x ? errorCase : successCase)(isNotAuthenticated);
  return computation();
});

const authLink = setContext(() => {
  const validate = Authentication.matchStrict({
    Empty: () => authenticate(),
    Invalid: ({ token }) => refresh(token),
    Valid: ({ token }) => TE.of({ token })
  });
  return pipe(
    validate(TokenStorage.getState()),
    TE.fold(
      (error) => pipe(
        T.fromIO(errorLog(error)),
        T.chain(() => T.of({ uri: getUri('') }))
      ),
      ({ token }) => pipe(
        T.fromIO(setToken(token)),
        T.map(t => ({ uri: getUri(t) }))
      )
    )
  )();
});

const httpLink = createHttpLink({
  fetch
});

export const createApolloClient = () => {
  // Create the apollo client
  return new ApolloClient({
    link: from([
      authLink,
      resetToken,
      httpLink
    ]),
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache()
  });
}
