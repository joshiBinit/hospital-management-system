import { createAction, props } from '@ngrx/store';

export const loadDashboardData = createAction('[Admin] Load Dashboard Data');

export const loadDashboardSuccess = createAction(
  '[Admin] Load Dashboard Success',
  props<{ payload: any }>()
);

export const loadDashboardFailure = createAction(
  '[Admin] Load Dashboard Failure',
  props<{ error: any }>()
);
