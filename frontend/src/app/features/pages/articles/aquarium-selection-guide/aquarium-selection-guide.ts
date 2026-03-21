import { Component } from '@angular/core';
import { PostHeaderType1 } from '../../../../shared/components/post/post-header-type1/post-header-type1';

@Component({
  selector: 'app-aquarium-selection-guide',
  standalone: true,
  imports: [PostHeaderType1],
  templateUrl: './aquarium-selection-guide.html',
  styleUrl: './aquarium-selection-guide.scss',
})
export class AquariumSelectionGuide {}
