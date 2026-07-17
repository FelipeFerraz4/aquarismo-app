import { Component, OnInit } from '@angular/core';
import { PostHeaderType1 } from '../../../../shared/components/post/post-header-type1/post-header-type1';
import { RelatedPosts } from '../../../../shared/components/post/related-posts/related-posts';
import { Post } from '../../../../shared/model/types/post';
import { SeoService } from '../../../../core/services/seo/seo-service';
import { PostService } from '../../../../core/services/post/post';

@Component({
  selector: 'app-aquarium-selection-guide',
  standalone: true,
  imports: [PostHeaderType1, RelatedPosts],
  templateUrl: './aquarium-selection-guide.html',
  styleUrl: './aquarium-selection-guide.scss',
})
export class AquariumSelectionGuide implements OnInit {
  currentPost?: Post;
  recommended: Post[] = [];
  latest: Post[] = [];

  constructor(
    private seo: SeoService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    const slug = 'aquarium-selection-guide';

    this.loadPost(slug);
    this.loadRecommendedPosts(slug);
    this.loadNextPost(slug);
    this.setupSeo();
  }

  loadPost(slug: string) {
    this.postService.getPostBySlug(slug).subscribe({
      next: (post: Post) => {
        this.currentPost = post;
      },
      error: (err) => {
        console.error('Error fetching post by slug', err);
      }
    });
  }

  loadRecommendedPosts(slug: string) {
    this.postService.getRecommendedPosts(slug).subscribe({
      next: (recommended: Post[]) => {
        this.recommended = recommended;
      },
      error: (err) => {
        console.error('Error fetching recommended posts', err);
      }
    });
  }

  loadNextPost(slug: string) {
    this.postService.getNextPost(slug).subscribe({
      next: (nextPost: Post[]) => {
        this.latest = nextPost;
      },
      error: (err) => {
        console.error('Error fetching next post', err);
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
