import { createReducer, on } from '@ngrx/store';
import * as AdminActions from './admin.actions';

export interface AdminState {
  loading: boolean;
  error: string | null;
  data: any;
}

export const initialState: AdminState = {
  loading: false,
  error: null,
  data: null,
};

export const adminReducer = createReducer(
  initialState,

  on(AdminActions.loadDashboardData, (state) => ({ ...state, loading: true })),

  on(AdminActions.loadDashboardSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    data: payload,
  })),

  on(AdminActions.loadDashboardFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
