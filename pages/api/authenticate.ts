import { NextApiRequest, NextApiResponse } from 'next'
import { authRequest } from '../../utils/auth/cms';
import { EmailString } from '../../types/IO';
import * as E from 'fp-ts/lib/Either';
import { AuthenticateRequest, HttpError } from '../../types/Directus';
import * as TE from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/pipeable';
import { isPostRequest } from '../../utils/TaskEither';


export default (req: NextApiRequest, res: NextApiResponse) => {
  const run = pipe(
    isPostRequest(req.method!),
    TE.chain(() => authRequest(
      process.env.DIRECTUS_AUTHENTICATE!,
      {
        email: process.env.DIRECTUS_EMAIL! as EmailString,
        password: process.env.DIRECTUS_PASSWORD!
      },
      AuthenticateRequest
    ))
  );

  run().then(
    E.fold(                          // stack: error.stack
      error => res.status(error.statusCode).json({ message: error.message, code: error.code, success: false }),
      ({ data }) => res.status(200).json({ token: data.token, success: true })
    )
  );
}