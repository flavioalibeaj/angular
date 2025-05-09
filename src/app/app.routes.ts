import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { createProfileGuard } from './pages/home/guards/create-profile.guard';
import { authRoutes } from './pages/auth/auth.routes';
import { homeRoutes } from './pages/home/home.routes';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/auth/pages/auth.component').then((c) => c.AuthComponent),
    children: authRoutes,
  },
  {
    path: '',
    data: {
      openWhenAuthenticated: true,
      openWithProfileId: true,
    },
    canActivate: [authGuard, createProfileGuard],
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
    children: homeRoutes,
  },
  {
    path: 'create-profile',
    canActivate: [authGuard, createProfileGuard],
    data: {
      openWhenAuthenticated: true,
    },
    loadComponent: () =>
      import('./pages/create-profile/create-profile.component').then(
        (c) => c.CreateProfileComponent
      ),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
