import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('../pages/settings/settings.component').then(
        (c) => c.SettingsComponent
      ),
  },
];
