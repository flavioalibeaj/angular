import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  // TODO remove after fixing the issue with the parent route
  {
    path: 'parent/child1',
    loadComponent: () =>
      import('./pages/settings/settings.component').then(
        (c) => c.SettingsComponent
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.component').then(
        (c) => c.SettingsComponent
      ),
  },
];
