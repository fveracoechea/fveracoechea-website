import * as t from 'io-ts';
// import { option } from 'io-ts-types/lib/option';
import { JWTString, EmailString } from './IO';


export const AuthenticateRequest = t.type({
  email: EmailString,
  password: t.string,
});
export type AuthenticateRequest = t.TypeOf<typeof AuthenticateRequest>;


export const RefreshRequest = t.type({
  token: JWTString,
});
export type RefreshRequest = t.TypeOf<typeof RefreshRequest>;



export const SucessResponse = t.type({
  data: t.type({
    token: JWTString,
  }),
  public: t.boolean
});
export type SucessResponse = t.TypeOf<typeof SucessResponse>;


export const ErrorResponse = t.type({
  error: t.type({
    code: t.number,
    message: t.string,
  })
});
export type ErrorResponse = t.TypeOf<typeof ErrorResponse>;

export class HttpError extends Error {
  message: string;
  code: number;
  statusCode: number;
  constructor(message: string, code = 0, statusCode = 500) {
    super(message);
    this.message = message;
    this.code = code;
    this.statusCode = statusCode;
  }
}