import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './blog-home.html',
  styleUrl: './blog-home.scss',
})
export class BlogHome {
  currentSlide = 0;

  slides = [
    {
      image: 'assets/home/slide-1.jpg',
      title: 'Aprenda Aquarismo de Verdade',
      description: 'Guias práticos e experiências reais.',
      button: {
        text: 'Ver Artigos',
        link: '/artigos'
      }
    },
    {
      image: 'assets/home/slide-2.jpg',
      title: 'Monte seu Aquário com Segurança',
      description: 'Evite erros comuns e cuide melhor dos peixes.'
    },
    {
      image: 'assets/home/slide-3.jpg',
      title: 'Ferramentas Educativas',
      description: 'Aprenda de forma interativa.'
    }
  ];

  nextSlide() {
    this.currentSlide =
      (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
