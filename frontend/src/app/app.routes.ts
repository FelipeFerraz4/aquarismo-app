import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/blog/blog.routing').then((m) => m.blogRoutes),
  },
  {
    path: 'terms-of-use',
    loadComponent: () => import('./features/blog/pages/terms/terms').then((m) => m.Terms),
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./features/blog/pages/privacy/privacy').then((m) => m.Privacy),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/blog/pages/about/about').then((m) => m.About),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/blog/pages/not-found/not-found').then((m) => m.NotFound),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
