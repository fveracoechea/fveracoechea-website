import * as TE from 'fp-ts/lib/TaskEither';
import { HttpError, RequestMethods } from '../types/Directus';

export const isPostRequest = TE.fromPredicate<HttpError, string>(
  method => method === RequestMethods.POST,
  () => new HttpError('Method Not Allowed', 0, 405)
);