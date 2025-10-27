import { LayoutConfig } from '../types';

export const ADMIN_LAYOUT: LayoutConfig = {
  title: 'Admin Dashboard',
  actions: [
    { icon: 'notifications', label: 'Alerts', actionType: 'notifications' },
    { icon: 'logout', label: 'Logout', actionType: 'logout' },
  ],
  menuItems: [
    { label: 'Admin Home', icon: 'dashboard', route: '/adminDashboard' },
    { label: 'Users', icon: 'people', route: '/users' },
    { label: 'Reports', icon: 'bar_chart', route: '/reports' },
  ],
};

export const DOCTOR_LAYOUT: LayoutConfig = {
  title: 'Doctor Dashboard',
  actions: [
    { icon: 'notifications', label: 'Alerts', actionType: 'notifications' },
    { icon: 'logout', label: 'Logout', actionType: 'logout' },
  ],
  menuItems: [
    { label: 'Patients', icon: 'groups', route: '/doctor/patients' },
    { label: 'Appointments', icon: 'event', route: '/doctor/appointments' },
  ],
};

export const PATIENT_LAYOUT: LayoutConfig = {
  title: 'Patient Dashboard',
  actions: [
    { icon: 'account_circle', label: 'Profile', actionType: 'profile' },
    { icon: 'logout', label: 'Logout', actionType: 'logout' },
  ],
  menuItems: [
    { label: 'My Appointments', icon: 'schedule', route: '/appointments' },
    { label: 'Health Records', icon: 'description', route: '/records' },
  ],
};
