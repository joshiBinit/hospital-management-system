import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminState } from './admin.reducer';
export const ADMIN_SELECTOR_KEY = 'admin';

export const selectAdminState =
  createFeatureSelector<AdminState>(ADMIN_SELECTOR_KEY);

export const selectAdminData = createSelector(selectAdminState, (s) => s.data);

export const selectAdminLoading = createSelector(
  selectAdminState,
  (s) => s.loading
);
