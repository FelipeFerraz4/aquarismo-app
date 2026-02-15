import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './blog-home.html',
  styleUrl: './blog-home.scss',
})
export class BlogHome implements OnInit, OnDestroy {
  currentSlide = 0;

  private intervalId: number | null = null;
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  slides = [
    {
      image: 'assets/pages/home/slide-12.webp',
      title: 'Aprenda sobre Aquarismo',
      description: 'Guias práticos e experiências reais.',
      button: {
        text: 'Ver Artigos',
        link: '/articles/guides'
      }
    },
    {
      image: 'assets/pages/home/slide-2.webp',
      title: 'Monte seu Aquário com Segurança',
      description: 'Evite erros comuns e cuide melhor dos peixes.',
      button: {
        text: 'Ver Artigos',
        link: '/articles/montage'
      }
    },
    {
      image: 'assets/pages/home/slide-3.webp',
      title: 'Divirta-se com as Ferramentas Educativas sobre Aquarismo',
      description: 'Aprenda de forma interativa.',
      button: {
        text: 'Ver Ferramentas',
        link: '/articles/tools'
      }
    }
  ];

  ngOnInit() {
    if (this.isBrowser) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
  }

  startAutoplay() {
    this.intervalId = window.setInterval(() => {
      this.nextSlide();
    }, 5000); // 🔥 agora 5 segundos
  }

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
