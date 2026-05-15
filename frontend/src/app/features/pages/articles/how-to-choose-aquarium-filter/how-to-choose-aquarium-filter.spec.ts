import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SeoService } from '../../../../core/services/seo/seo-service';
import { PostService } from '../../../../core/services/post/post';
import { HowToChooseAquariumFilter } from './how-to-choose-aquarium-filter';
import { DEFAULT_POST } from '../../../../shared/model/mocks/post-mock';

describe('HowToChooseAquariumFilter', () => {
  let spectator: Spectator<HowToChooseAquariumFilter>;

  const createComponent = createComponentFactory({
    component: HowToChooseAquariumFilter,
    providers: [
      {
        provide: SeoService,
        useValue: { updateMetadata: jest.fn() }
      },
      {
        provide: PostService,
        useValue: {
          getPostPageData: jest.fn().mockReturnValue({
            post: {
              ...DEFAULT_POST,
              title: 'Test',
              description: 'Desc',
              image: 'img.png',
              slug: 'test',
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