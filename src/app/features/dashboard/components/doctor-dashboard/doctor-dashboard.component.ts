import { Component, OnInit } from '@angular/core';
import { LayoutConfigService } from '../../../../layout/services/layout.config.service';
import { DOCTOR_LAYOUT } from '../../../../layout/types/layout-presets';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DoctorDashboardComponent implements OnInit {
  constructor(private layoutService: LayoutConfigService) {}

  appointmentsToday = [
    { patient: 'John Doe', time: '10:00 AM', reason: 'General Checkup' },
    { patient: 'Jane Smith', time: '11:30 AM', reason: 'Dental Cleaning' },
    { patient: 'Mike Johnson', time: '01:00 PM', reason: 'Eye Examination' },
    { patient: 'Emily Davis', time: '02:15 PM', reason: 'Physical Therapy' },
  ];

  quickStats = [
    {
      label: 'Patients Today',
      value: 14,
      icon: 'groups',
      color: 'bg-indigo-500',
    },
    {
      label: 'Pending Reports',
      value: 3,
      icon: 'description',
      color: 'bg-amber-500',
    },
    { label: 'Messages', value: 8, icon: 'mail', color: 'bg-rose-500' },
  ];

  ngOnInit(): void {
    this.layoutService.setLayout(DOCTOR_LAYOUT);
  }
}
