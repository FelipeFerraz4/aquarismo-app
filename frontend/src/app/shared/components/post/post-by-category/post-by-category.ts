import { Component } from '@angular/core';
import { Post } from '../../../model/types/post';
import { RouterLink } from '@angular/router';
import { PostService } from '../../../../core/services/post/post';

@Component({
  selector: 'app-post-by-category',
  imports: [RouterLink],
  templateUrl: './post-by-category.html',
  styleUrl: './post-by-category.scss',
})
export class PostByCategory {

  postByCategory: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPostData();
  }

  loadPostData() {
    // Category: Itens do Aquarismo
    this.postByCategory.push(this.postService.getPostBySlug('aquarium-selection-guide'));
    // Category: Fundamentos do Aquarismo
    this.postByCategory.push(this.postService.getPostBySlug('aquarium-size'));
    // Category: Problemas no Aquarismo
    this.postByCategory.push(this.postService.getPostBySlug('aquarium-glass-bowing-danger'));
    // Category: Cuidados com Peixes
    this.postByCategory.push(this.postService.getPostBySlug('betta-fish-7-care-tips'));
  }
}
