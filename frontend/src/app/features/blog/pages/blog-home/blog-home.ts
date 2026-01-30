import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
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
  templateUrl: './blog-home.html',
  styleUrl: './blog-home.scss',
})
export class BlogHome implements OnInit, OnDestroy {
  currentSlide = 0;

  private intervalId: number | null = null;
  private isBrowser = false;
  private isPausedByHover = false;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  slides = [
    {
      image: 'assets/pages/home/slide-1.png',
      title: 'Aprenda sobre Aquarismo',
      description: 'Guias práticos e experiências reais.',
      button: {
        text: 'Ver Artigos',
        link: '/articles/guides'
      }
    },
    {
      image: 'assets/pages/home/slide-2.png',
      title: 'Monte seu Aquário com Segurança',
      description: 'Evite erros comuns e cuide melhor dos peixes.',
      button: {
        text: 'Ver Artigos',
        link: '/articles/montage'
      }
    },
    {
      image: 'assets/pages/home/slide-3.png',
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
      // Delay mínimo garante que mouseenter inicial não mate o autoplay
      setTimeout(() => {
        this.startAutoplay();
      }, 0);
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    if (this.intervalId !== null) return;

    this.intervalId = window.setInterval(() => {
      if (!this.isPausedByHover) {
        this.nextSlide();
      }
    }, 3000);
  }

  stopAutoplay() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  onMouseEnter() {
    this.isPausedByHover = true;
  }

  onMouseLeave() {
    this.isPausedByHover = false;
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
