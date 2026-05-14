import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToChooseAquariumFilter } from './how-to-choose-aquarium-filter';

describe('HowToChooseAquariumFilter', () => {
  let component: HowToChooseAquariumFilter;
  let fixture: ComponentFixture<HowToChooseAquariumFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToChooseAquariumFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToChooseAquariumFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
