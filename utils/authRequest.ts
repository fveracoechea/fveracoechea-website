import Url from './Url';
import * as TE from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/pipeable';
import * as t from 'io-ts';
import * as E from 'fp-ts/lib/Either';
import { SucessResponse, ErrorResponse, HttpError } from '../types/Directus';
import { decodeWith, setError, toErrorResponse } from './decode';

const request = <T>(url: string, body: T, method = 'GET') => {
  return fetch(url, {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(
    response => response.ok
      ? response.json()
      : response.json().then(error => Promise.reject(error))
  )
  .catch(toErrorResponse)
}

const httpPost = <A>(url: string, body: A) => TE.tryCatch(
  () => request(url, body, 'POST'),
  error => pipe(
    ErrorResponse.decode(error),
    E.fold(
      setError,
      ({ error }) => new HttpError(error.message, error.code)
    )
  )
);

export const authRequest = <A>(path: string, body: A, decoder: t.Decoder<unknown, A>) => {
  const url = Url.concat(process.env.DIRECTUS_BASE_URL, path);
  return pipe(
    decodeWith(decoder)(body),
    TE.chain(b => httpPost(url, b)),
    TE.chain(decodeWith(SucessResponse))
  )
};

