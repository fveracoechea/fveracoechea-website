import { NextApiRequest, NextApiResponse } from 'next'
import { authRequest } from '../../utils/auth/cms';
import * as E from 'fp-ts/lib/Either';
import { RefreshRequest } from '../../types/Directus';
import { pipe } from 'fp-ts/lib/pipeable';
import * as TE from 'fp-ts/lib/TaskEither';
import { isPostRequest } from '../../utils/TaskEither';


export default (req: NextApiRequest, res: NextApiResponse) => {
  const run = pipe(
    isPostRequest(req.method),
    TE.chain(() => authRequest('/auth/refresh', { token: req.body.token }, RefreshRequest))
  );

  run().then(
    E.fold(                          // stack: error.stack
      error => res.status(error.statusCode).json({ message: error.message, code: error.code, success: false }),
      ({ data }) => res.status(200).json({ token: data.token, success: true })
    )
  );
}