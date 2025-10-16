import { createAction, props } from '@ngrx/store';
import { UserCredentials, User } from '../../../core/models/auth.model';

export const login = createAction(
  '[Auth] Login',
  props<{ credentials: UserCredentials }>()
);
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User; token: string }>()
);
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
