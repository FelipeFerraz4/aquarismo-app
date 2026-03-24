import { Component, Input } from '@angular/core';
import { Post } from '../../../model/types/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-related-posts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './related-posts.html',
  styleUrl: './related-posts.scss',
})
export class RelatedPosts {
  @Input() recommendedPosts: Post[] = [];
  @Input() lastPosts: Post[] = [];
}
