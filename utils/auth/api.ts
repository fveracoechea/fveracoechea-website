import * as TE from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/pipeable';
import { Authorized, Unauthorized } from '../../types/Auth';
import * as E from 'fp-ts/lib/Either';
import { setHttpError, decodeWith, toAuthError } from '../decode';
import { HttpError } from '../../types/Directus';

interface DirectusResponse {
  code?: number,
  token?: string,
  message?: string,
  success: boolean
}

const request = <T>(url: string, body: T): Promise<DirectusResponse> => {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(
    response => response.ok
      ? response.json()
      : response.json().then(error => Promise.reject(error))
  )
  .catch(toAuthError)
}

const authRequest = <A>(url: string, body: A) => TE.tryCatch(
  () => request(url, body),
  error => pipe(
    Unauthorized.decode(error),
    E.fold(
      setHttpError,
      ({ message, code }) => new HttpError(message, code)
    )
  )
);

export const authenticate = () => {
  const url = process.env.NEXT_PUBLIC_APP_URL!.concat(process.env.NEXT_PUBLIC_API_AUTHENTICATE!);
  return pipe(
    authRequest(url, {}),
    TE.chain(decodeWith(Authorized))
  );
};

export const refresh = (token: string) => {
  const url = process.env.NEXT_PUBLIC_APP_URL!.concat(process.env.NEXT_PUBLIC_API_REFRESH!);
  return pipe(
    authRequest(url, { token }),
    TE.chain(decodeWith(Authorized))
  );
};
