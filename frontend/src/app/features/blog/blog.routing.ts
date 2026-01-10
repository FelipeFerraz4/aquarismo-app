import { Routes } from '@angular/router';
import { ArticlePage } from './pages/articles/article-page/article-page';
import { BlogHome } from './pages/blog-home/blog-home';

export const blogRoutes: Routes = [
  {
    path: '',
    component: BlogHome,
  },
  {
    path: 'article',
    component: ArticlePage,
  },
];
