import { Status } from './status';

export interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;      
  slug: string;
  readingTime: string;  
  published: boolean;
  publishedAt?: string;
  views: number;
  status: Status;
  
  authorId: string;      
  categoryId: string;   
    
  authorName: string;    
  categoryName: string;  

  createdAt?: string;
  updatedAt?: string;
}

/**
 * Estrutura agregada necessária para montar a tela de detalhes de um artigo
 */
export interface PostPageData {
  post: Post;
  recommended: Post[];
  latest: Post[];
}