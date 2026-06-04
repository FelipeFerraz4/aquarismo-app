import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SeoService } from '../../../../core/services/seo/seo-service';
import { PostService } from '../../../../core/services/post/post';
import { AquariumFiltrationGuide } from './aquarium-filtration-guide';
import { provideRouter } from '@angular/router';


describe('AquariumFiltrationGuide', () => {
  let spectator: Spectator<AquariumFiltrationGuide>;

  const createComponent = createComponentFactory({
    component: AquariumFiltrationGuide,
    providers: [
      provideRouter([]),
      {
        provide: SeoService,
        useValue: { updateMetadata: jest.fn() }
      },
      {
        provide: PostService,
        useValue: {
          getPostPageData: jest.fn().mockReturnValue({
            post: {
              title: 'Test',
              description: 'Desc',
              image: 'img.png',
              slug: 'test'
            },
            recommended: [],
            latest: []
          })
        }
      }
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});