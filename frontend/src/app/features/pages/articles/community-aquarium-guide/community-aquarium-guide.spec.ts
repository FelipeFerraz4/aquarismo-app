import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SeoService } from '../../../../core/services/seo/seo-service';
import { PostService } from '../../../../core/services/post/post';
import { CommunityAquariumGuide } from './community-aquarium-guide';
import { provideRouter } from '@angular/router';


describe('CommunityAquariumGuide', () => {
  let spectator: Spectator<CommunityAquariumGuide>;

  const createComponent = createComponentFactory({
    component: CommunityAquariumGuide,
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