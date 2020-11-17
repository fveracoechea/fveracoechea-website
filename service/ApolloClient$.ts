import { BehaviorSubject } from 'rxjs';
import { createApolloClient } from '../utils/apolloClient';
import * as O from 'fp-ts/lib/Option';
import {
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { pipe } from 'fp-ts/lib/pipeable';
import { IO } from 'fp-ts/lib/IO';

export const apollo$ = new BehaviorSubject<ApolloClient<NormalizedCacheObject> | null>(null);

const setClient = (
  client: ApolloClient<NormalizedCacheObject>
): IO<ApolloClient<NormalizedCacheObject>> => {
  return () => {
    apollo$.next(client);
    return client;
  };
}

export const initializeApollo = (
  initialState: NormalizedCacheObject | null = null
) => {
  const client = pipe(
    O.fromNullable(apollo$.getValue()),
    O.fold(
      () => createApolloClient(),
      apollo => apollo
    )
  );
  const saveClient = setClient(client);
  return pipe(
    O.fromNullable(initialState),
    O.map(state => client.cache.restore(state)),
    O.chain(() => typeof window === 'undefined' ? O.none : O.some(saveClient())),
    O.fold(
      () => client,
      apollo => apollo
    )
  )
}