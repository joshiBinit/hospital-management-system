import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAdminData,
  selectAdminLoading,
} from '../../store/admin.selectors';
import * as AdminActions from '../../store/admin.actions';
import { LayoutConfigService } from '../../../../layout/services/layout.config.service';
import { ADMIN_LAYOUT } from '../../../../layout/types/layout-presets';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
  constructor(private layoutService: LayoutConfigService) {}

  metrics = [
    { label: 'Employees', value: 128, icon: 'people', color: 'bg-indigo-500' },
    { label: 'Departments', value: 7, icon: 'apartment', color: 'bg-teal-500' },
    {
      label: 'Pending Leaves',
      value: 5,
      icon: 'event_busy',
      color: 'bg-rose-500',
    },
    {
      label: 'Monthly Payroll',
      value: '$86,400',
      icon: 'attach_money',
      color: 'bg-amber-500',
    },
  ];

  ngOnInit(): void {
    this.layoutService.setLayout(ADMIN_LAYOUT);
  }
}
