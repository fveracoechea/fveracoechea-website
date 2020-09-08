import validator from 'validator';
import * as t from 'io-ts';

interface JWTStringBrand {
  readonly JWTString: unique symbol;
}
export const JWTString = t.brand(
  t.string,
  (s): s is t.Branded<string, JWTStringBrand> => validator.isJWT(s),
  'JWTString',
);

interface URLStringBrand {
  readonly URLString: unique symbol;
}
export const URLString = t.brand(
  t.string,
  (s): s is t.Branded<string, URLStringBrand> => validator.isURL(s),
  'URLString',
);

interface PhoneStringBrand {
  readonly PhoneString: unique symbol;
}
export const PhoneString = t.brand(
  t.string,
  (s): s is t.Branded<string, PhoneStringBrand> => validator.isMobilePhone(s),
  'PhoneString',
);

interface EmailStringBrand {
  readonly EmailString: unique symbol;
}
export const EmailString = t.brand(
  t.string,
  (s): s is t.Branded<string, EmailStringBrand> => validator.isEmail(s),
  'EmailString',
);
export type EmailString = t.TypeOf<typeof EmailString>;