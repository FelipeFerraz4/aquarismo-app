import { Component, OnInit } from '@angular/core';
import { PostHeaderType1 } from '../../../../shared/components/post/post-header-type1/post-header-type1';
import { RelatedPosts } from '../../../../shared/components/post/related-posts/related-posts';
import { Post, PostPageData } from '../../../../shared/model/types/post';
import { SeoService } from '../../../../core/services/seo/seo-service';
import { PostService } from '../../../../core/services/post/post';

@Component({
  selector: 'app-tetra-fish-guide',
  standalone: true,
  imports: [PostHeaderType1, RelatedPosts],
  templateUrl: './tetra-fish-guide.html',
  styleUrls: ['./tetra-fish-guide.scss', '../articles-style.scss'],
})
export class TetraFishGuide implements OnInit {
  currentPost?: Post;
  recommended: Post[] = [];
  latest: Post[] = [];

  constructor(
    private seo: SeoService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.loadPostData('tetra-fish-guide');

    this.setupSeo();
  }

  loadPostData(slug: string) {
    this.postService.getArticleInformation(slug).subscribe({
      next: (postPageData: PostPageData) => {
        this.currentPost = postPageData.post;
        this.recommended = postPageData.recommended;
        this.latest = postPageData.latest;
      },
      error: (err) => {
        console.error('Error fetching article information', err);
      }
    });
  }

  setupSeo() {
    this.seo.updateMetadata({
      title: this.currentPost!.title,
      description: this.currentPost!.description,
      image: this.currentPost!.imageUrl,
      url: `https://bluefoxaquarismo.com.br/articles/${this.currentPost!.slug}`,
    });
  }
}
