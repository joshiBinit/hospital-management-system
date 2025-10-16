import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../store/auth.reducer';
export const AUTH_SELECTOR_KEY = 'auth';
export const selectAuthState =
  createFeatureSelector<AuthState>(AUTH_SELECTOR_KEY);

export const selectUser = createSelector(selectAuthState, (s) => s.user);
export const selectToken = createSelector(selectAuthState, (s) => s.token);
export const selectLoading = createSelector(selectAuthState, (s) => s.loading);
export const selectError = createSelector(selectAuthState, (s) => s.error);
export const selectIsLoggedIn = createSelector(selectToken, (token) => !!token);
