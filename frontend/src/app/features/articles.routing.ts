import { Routes } from '@angular/router';

export const articlesRoutes: Routes = [
  {
    path: 'article',
    loadComponent: () => import('./pages/articles/article-page/article-page').then((m) => m.ArticlePage),
  },
];
