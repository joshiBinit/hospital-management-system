import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AdminActions from './admin.actions';
import { catchError, map, of, switchMap, delay } from 'rxjs';

@Injectable()
export class AdminEffects {
  private actions$ = inject(Actions);
  constructor() {}

  loadDashboard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadDashboardData),
      // Simulate a network delay so the spinner shows briefly
      delay(700),
      switchMap(() =>
        of({
          totalPatients: 1267,
          totalDoctors: 72,
          totalRevenue: 182_450,
          recentAdmissions: [
            { name: 'Anita Kumar', ward: 'Cardiology', admitted: '2024‑06‑01' },
            {
              name: 'Rahul Sharma',
              ward: 'Orthopedics',
              admitted: '2024‑06‑03',
            },
            {
              name: 'Sophia Fernandes',
              ward: 'Neurology',
              admitted: '2024‑06‑04',
            },
          ],
          users: [
            { name: 'Dr. Meera Nair', role: 'Cardiologist' },
            { name: 'Dr. Arjun Patel', role: 'Pediatrician' },
            { name: 'Dr. Priya Sreedhar', role: 'Oncologist' },
          ],
        }).pipe(
          map((payload) => AdminActions.loadDashboardSuccess({ payload }))
        )
      )
    )
  );
}
