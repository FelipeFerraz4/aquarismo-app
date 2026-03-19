import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'app/daily-habits/privacy-policy',
    loadComponent: () =>
      import('./daily-habits/privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy),
  },
];
