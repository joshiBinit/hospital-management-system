import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { MaterialModule } from '../../shared/material/material.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SharedModule } from '../../shared/shared-module';
import { StoreModule } from '@ngrx/store';
import { adminReducer } from './store/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './store/admin.effects';
import { ADMIN_SELECTOR_KEY } from './store/admin.selectors';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';

@NgModule({
  declarations: [AdminDashboardComponent, DoctorDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedModule,
    StoreModule.forFeature(ADMIN_SELECTOR_KEY, adminReducer),
    EffectsModule.forFeature([AdminEffects]),
  ],
})
export class DashboardModule {}
