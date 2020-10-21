import { BehaviorSubject } from 'rxjs';
import { Authentication } from '../types/Auth';

const initialState = Authentication.of.Empty({ token: '' })

const token$ = new BehaviorSubject(initialState);

export const TokenStorage = {
  getState () {
    return token$.getValue();
  },
  invalidate () {
    const { token } = token$.getValue();
    token$.next(Authentication.of.Invalid({ token }));
  },
  setToken (token: string) {
    token$.next(Authentication.of.Valid({ token }));
  }
}
