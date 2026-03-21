import { Routes } from '@angular/router';

export const articlesRoutes: Routes = [
  {
    path: 'aquarium-selection-guide',
    loadComponent: () =>
      import('./aquarium-selection-guide/aquarium-selection-guide').then(
        (m) => m.AquariumSelectionGuide,
      ),
  },
];
