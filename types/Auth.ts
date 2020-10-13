import * as t from 'io-ts';
import { makeADT, ofType } from '@morphic-ts/adt'
// import { option } from 'io-ts-types/lib/option';
import { JWTString } from './IO';

export const Authorized = t.type({
  token: JWTString,
  success: t.literal(true),
});

export const Unauthorized = t.type({
  message: t.string,
  code: t.number,
  success: t.literal(false),
});

interface Valid {
  type: 'Valid'
  token: string,
}
interface Empty {
  type: 'Empty'
  token: string,
}
interface Invalid {
  type: 'Invalid'
  token: string
}

export const Authentication = makeADT('type')({
  Valid: ofType<Valid>(),
  Empty: ofType<Empty>(),
  Invalid: ofType<Invalid>()
})