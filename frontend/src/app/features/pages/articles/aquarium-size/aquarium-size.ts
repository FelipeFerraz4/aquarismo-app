import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { PostHeaderType1 } from '../../../../shared/components/post/post-header-type1/post-header-type1';
import { RelatedPosts } from '../../../../shared/components/post/related-posts/related-posts';
import { POST_MOCK, DEFAULT_POST } from '../../../../shared/model/mocks/post-mock';
import { Post, SearchPostById, SearchPostBySlug } from '../../../../shared/model/types/post';

@Component({
  selector: 'app-aquarium-size',
  imports: [PostHeaderType1, RelatedPosts],
  templateUrl: './aquarium-size.html',
  styleUrls: ['./aquarium-size.scss', '../articles-style.scss'],
})
export class AquariumSize implements OnInit {
  currentPost: Post | undefined;

  recommended: Post[] = [];
  latest: Post[] = [];

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.currentPost = SearchPostBySlug(POST_MOCK, 'aquarium-size');

    if (this.currentPost) {
      const currentId = this.currentPost.id;

      this.recommended.push(SearchPostById(POST_MOCK, '1')!);
      this.recommended.push(SearchPostById(POST_MOCK, '3')!);

      const allPostsReversed = [...POST_MOCK].filter((p) => p.id !== currentId).reverse();

      const categoryLatest = allPostsReversed
        .filter((p) => p.category === this.currentPost?.category)
        .slice(0, 2);

      const generalLatest = allPostsReversed.filter((p) => !categoryLatest.includes(p)).slice(0, 4);

      this.latest = [...categoryLatest, ...generalLatest];

      this.updateMetadata();
    }

  }

  updateMetadata() {
    const title = this.currentPost?.title || DEFAULT_POST.title;
    const description = this.currentPost?.description || DEFAULT_POST.description;
    const url = this.currentPost
      ? `https://bluefoxaquarismo.com.br/articles/${this.currentPost.slug}`
      : 'https://bluefoxaquarismo.com.br';

    this.titleService.setTitle(title);

    this.metaService.updateTag({
      name: 'description',
      content: description,
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: title,
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: description,
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: this.currentPost?.image || '',
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'article',
    });

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: url,
    });

    this.updateCanonicalUrl(url);
  }

  updateCanonicalUrl(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      let link: HTMLLinkElement | null =
        document.querySelector("link[rel='canonical']");

      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }

      link.setAttribute('href', url);
    }
  }
}
