import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostHeaderType1 } from '../../../../shared/components/post/post-header-type1/post-header-type1';
import { RelatedPosts } from '../../../../shared/components/post/related-posts/related-posts';
import { Post } from '../../../../shared/model/types/post';
import { SeoService } from '../../../../core/services/seo/seo-service';
import { PostService } from '../../../../core/services/post/post';

@Component({
  selector: 'app-community-aquarium-guide',
  standalone: true,
  imports: [PostHeaderType1, RelatedPosts, RouterLink],
  templateUrl: './community-aquarium-guide.html',
  styleUrls: ['./community-aquarium-guide.scss', '../articles-style.scss'],
})
export class CommunityAquariumGuide implements OnInit {
  currentPost?: Post;
  recommended: Post[] = [];
  latest: Post[] = [];

  constructor(
    private seo: SeoService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.loadPostData('community-aquarium-guide', ['4', '8']);

    this.setupSeo();
  }

  loadPostData(slug: string, recommendedIds: string[]) {
    const postData = this.postService.getPostPageData(slug, recommendedIds);

    if (!postData) return;

    this.currentPost = postData.post;
    this.recommended = postData.recommended;
    this.latest = postData.latest;
  }

  setupSeo() {
    this.seo.updateMetadata({
      title: this.currentPost!.title,
      description: this.currentPost!.description,
      image: this.currentPost!.image,
      url: `https://bluefoxaquarismo.com.br/articles/${this.currentPost!.slug}`,
    });
  }
}
