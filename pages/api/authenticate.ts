import { NextApiRequest, NextApiResponse } from 'next'
import { authRequest } from '../../utils/authRequest';
import { EmailString } from '../../types/IO';
import * as E from 'fp-ts/lib/Either';
import { AuthenticateRequest, HttpError } from '../../types/Directus';
import * as TE from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/pipeable';


export default (req: NextApiRequest, res: NextApiResponse) => {
  const validateRequestMethod = TE.fromPredicate<HttpError, string>(
    method => method === 'POST',
    () => new HttpError('Method Not Allowed', 0, 405)
  );

  const run = pipe(
    validateRequestMethod(req.method),
    TE.chain(() => authRequest(
      '/auth/authenticate',
      {
        email: process.env.DIRECTUS_EMAIL as EmailString,
        password: process.env.DIRECTUS_PASSWORD
      },
      AuthenticateRequest
    ))
  );

  run().then(
    E.fold(                          // stack: error.stack
      error => res.status(error.statusCode).json({ message: error.message, code: error.code }),
      ({ data }) => res.status(200).json({ token: data.token, success: true })
    )
  );
}