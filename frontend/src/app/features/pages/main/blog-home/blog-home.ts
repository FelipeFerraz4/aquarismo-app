import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../../../../shared/model/types/post';
import { SeoService } from '../../../../core/services/seo/seo-service';
import { PostService } from '../../../../core/services/post/post';
import { LatestPosts } from '../../../../shared/components/post/latest-posts/latest-posts';
import { PostByCategory } from '../../../../shared/components/post/post-by-category/post-by-category';
import { CategoryWithPost } from '../../../../shared/model/types/category';

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LatestPosts,
    PostByCategory
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './blog-home.html',
  styleUrl: './blog-home.scss',
})
export class BlogHome implements OnInit {

  isBrowser: boolean;

  latest: Post[] = [];
  categoryWithPost: CategoryWithPost[] = [];

  constructor(
    private seo: SeoService,
    private postService: PostService,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  slides = [
    {
      image: 'assets/images/aquariums/aquarium5.webp',
      title: 'Aprenda sobre Aquarismo',
      description: 'Guias práticos e experiências reais.',
      button: {
        text: 'Ver Artigos',
        link: '/articles/guides'
      }
    },
    {
      image: 'assets/images/aquariums/maintenance-aquarium.webp',
      title: 'Monte seu Aquário com Segurança',
      description: 'Evite erros comuns e cuide melhor dos peixes.',
      button: {
        text: 'Ver Artigos',
        link: '/articles/montage'
      }
    },
    {
      image: 'assets/images/aquariums/learning-aquariums.webp',
      title: 'Divirta-se com as Ferramentas Educativas sobre Aquarismo',
      description: 'Aprenda de forma interativa.',
      button: {
        text: 'Ver Ferramentas',
        link: '/articles/tools'
      }
    }
  ];

  ngOnInit(): void {
    this.loadPostData();
    this.loadPostByCategory();
    this.setupSeo();
  }

  loadPostData() {
    const allPostsReversed = this.postService.getAllPosts().reverse();
    this.latest = allPostsReversed.slice(0, 4);
  }

  loadPostByCategory() {

    const postByCategory: Post[] = [];
    // Category: Itens do Aquarismo
    postByCategory.push(this.postService.getPostBySlug('aquarium-selection-guide'));
    // Category: Fundamentos do Aquarismo
    postByCategory.push(this.postService.getPostBySlug('aquarium-size'));
    // Category: Problemas no Aquarismo
    postByCategory.push(this.postService.getPostBySlug('aquarium-glass-bowing-danger'));
    // Category: Cuidados com Peixes
    postByCategory.push(this.postService.getPostBySlug('betta-fish-7-care-tips'));

    this.categoryWithPost = this.postService.getAllCategories()
      .map(category => ({
        ...category,
        post: postByCategory.find(p => p.category === category.name)
      }))
      .filter((entry): entry is CategoryWithPost => !!entry.post);
  }

  setupSeo() {
    this.seo.updateMetadata({
      title: "Blue Fox Aquarismo",
      description: "A Blue Fox Aquarismo é uma plataforma educacional criada para compartilhar conhecimento real e acessível sobre aquários, peixes e plantas aquáticas.",
      image: this.slides[0].image,
      url: `https://bluefoxaquarismo.com.br/`,
    });
  }
}
