import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import { createHttpLink } from "@apollo/client/link/http";
import { setContext } from "@apollo/client/link/context";
import { TokenStorage } from '../service/TokenState';
import { IO, chain } from 'fp-ts/lib/IO';
import { pipe } from 'fp-ts/lib/pipeable';
import * as TE from 'fp-ts/lib/TaskEither';
import { Authentication } from '../types/Auth';
import { authenticate, refresh } from './auth/api';

const getUri = (token: string) => process.env.NEXT_PUBLIC_DIRECTUS_GRAPHQL.concat(`?access_token=${token}`);

const resetToken = onError(({ networkError, forward, operation }) => {
  const isNotAuthenticated: IO<boolean> = () => (
    networkError &&
    networkError.name === 'ServerError' &&
    'statusCode' in networkError &&
    networkError.statusCode === 401
  );
  const invalidate: IO<void> = () => TokenStorage.invalidate();
  const retry: IO<any> = () => forward(operation);
  const errorCase = chain(() => retry)(invalidate);
  const successCase: IO<void> = () => {};
  const computation = chain(x => x ? errorCase : successCase)(isNotAuthenticated);
  return computation();
});


const authLink = setContext((Storage: any) => {
  const validate = Authentication.matchStrict({
    Empty: () => authenticate(),
    Invalid: ({ token }) => refresh(token),
    Valid: ({ token }) => TE.of({ token })
  });
  return pipe(
    validate(TokenStorage.getState()),
    TE.fold(
      ({ message }) => () => Promise.resolve({ uri: getUri(message) }),
      ({ token }) => () => Promise.resolve({ uri: getUri(token) })
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
    cache: new InMemoryCache()
  });
}
