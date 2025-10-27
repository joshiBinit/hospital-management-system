import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../core/constants/routes.consts';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';

const { ADMIN_DASHBOARD, DOCTOR_DASHBOARD } = ROUTES;
const routes: Routes = [
  { path: ADMIN_DASHBOARD, component: AdminDashboardComponent },
  { path: DOCTOR_DASHBOARD, component: DoctorDashboardComponent },
  { path: '', redirectTo: ADMIN_DASHBOARD, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
