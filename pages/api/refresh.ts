import { NextApiRequest, NextApiResponse } from 'next'
import { authRequest } from '../../utils/authRequest';
import { EmailString } from '../../types/IO';
import * as E from 'fp-ts/lib/Either';
import { RefreshRequest, HttpError } from '../../types/Directus';
import { pipe } from 'fp-ts/lib/pipeable';
import * as TE from 'fp-ts/lib/TaskEither';

type Data = {
  token: string,
  success: boolean
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const validateRequestMethod = TE.fromPredicate<HttpError, string>(
    method => method === 'POST',
    () => new HttpError('Method Not Allowed', 0, 405)
  );

  const run = pipe(
    validateRequestMethod(req.method),
    TE.chain(() => authRequest('/auth/refresh', { token: req.body.token }, RefreshRequest))
  )

  run().then(
    E.fold(                          // stack: error.stack
      error => res.status(error.statusCode).json({ message: error.message, code: error.code }),
      ({ data }) => res.status(200).json({ token: data.token, refreshed: true })
    )
  );
}