import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/pages/blog-home/blog-home').then((m) => m.BlogHome),
  },
  {
    path: 'terms-of-use',
    loadComponent: () => import('./features/pages/terms/terms').then((m) => m.Terms),
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./features/pages/privacy/privacy').then((m) => m.Privacy),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/pages/about/about').then((m) => m.About),
  },
  {
    path: 'articles',
    loadChildren: () => import('./features/articles.routing').then((m) => m.articlesRoutes),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/pages/not-found/not-found').then((m) => m.NotFound),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
