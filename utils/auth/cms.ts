import * as TE from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/pipeable';
import * as t from 'io-ts';
import * as E from 'fp-ts/lib/Either';
import { SucessResponse, ErrorResponse, HttpError, AuthenticateRequest, RefreshRequest } from '../../types/Directus';
import { decodeWith, setHttpError, toAuthError } from '../decode';
import { EmailString } from '../../types/IO';

interface DirectusResponse {
	code?: number;
	token?: string;
	message?: string;
	success: boolean;
}

const request = <T>(url: string, body: T, method: string): Promise<DirectusResponse> => {
	return fetch(url, {
		method,
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(body),
	})
		.then((response) => (response.ok ? response.json() : response.json().then((error) => Promise.reject(error))))
		.catch(toAuthError);
};

const httpPost = <A>(url: string, body: A) =>
	TE.tryCatch(
		() => request(url, body, 'POST'),
		(error) =>
			pipe(
				ErrorResponse.decode(error),
				E.fold(setHttpError, ({ error }) => new HttpError(error.message, error.code))
			)
	);

export const cmsAuthRequest = <A>(path: string, body: A, decoder: t.Decoder<unknown, A>) => {
	const url = process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL!.concat(path);
	return pipe(
		decodeWith(decoder)(body),
		TE.chain((b) => httpPost(url, b)),
		TE.chain(decodeWith(SucessResponse))
	);
};

export const cmsAuthenticate = () => pipe(
  cmsAuthRequest(
		process.env.NEXT_PUBLIC_DIRECTUS_AUTHENTICATE!,
		{
			email: process.env.NEXT_PUBLIC_DIRECTUS_EMAIL! as EmailString,
			password: process.env.NEXT_PUBLIC_DIRECTUS_PASSWORD!,
		},
		AuthenticateRequest
  ),
  TE.map(d => {
    console.log(d);
    return d;
  }),
  TE.map(({ data: { token } }) => ({ token }))
);

export const cmsRefresh = (token: string) => pipe(
  cmsAuthRequest(
    process.env.NEXT_PUBLIC_DIRECTUS_REFRESH!,
    { token },
    RefreshRequest
  ),
  TE.map(d => {
    console.log(d);
    return d;
  }),
  TE.map(({ data: { token } }) => ({ token })),
);
