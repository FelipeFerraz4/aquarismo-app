import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-header-type1',
  standalone: true,
  imports: [],
  templateUrl: './post-header-type1.html',
  styleUrl: './post-header-type1.scss',
})
export class PostHeaderType1 {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() author: string = 'Equipe Blue Fox';
  @Input() date: string = '';
  @Input() readingTime: string = '5 min'; // O "algo a mais": tempo de leitura
  @Input() category: string = 'Guia de Montagem';
}
