import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/blog/blog.routing').then(m => m.blogRoutes),
  },

  // 404 (opcional, mas recomendado)
  {
    path: '**',
    loadComponent: () =>
      import('./features/blog/pages/not-found/not-found')
        .then(m => m.NotFound),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
