import { BehaviorSubject } from 'rxjs';
import { createApolloClient } from '../utils/apolloClient';
import * as O from 'fp-ts/lib/Option';
import {
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { pipe } from 'fp-ts/lib/pipeable';
import { IO } from 'fp-ts/lib/IO';
import { Option } from 'fp-ts/lib/Option';

export const apollo$ = new BehaviorSubject<ApolloClient<NormalizedCacheObject> | null>(null);

const setClient = (
  client: ApolloClient<NormalizedCacheObject>
): IO<Option<ApolloClient<NormalizedCacheObject>>> => {
  return () => {
    apollo$.next(typeof window === 'undefined' ? null : client);
    return O.some(client);
  };
}

const getApollo = () => {
  return typeof window === 'undefined'
    ? null
    : apollo$.getValue()
}

export const initializeApollo = (
  initialState: NormalizedCacheObject | null = null
) => {
  const client = pipe(
    O.fromNullable(getApollo()),
    O.fold(
      () => createApolloClient(),
      apollo => apollo
    )
  );
  return pipe(
    O.fromNullable(initialState),
    O.map(state => client.cache.restore(state)),
    O.chain(setClient(client)),
    O.getOrElse(() => client)
  );
}