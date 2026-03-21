import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumSelectionGuide } from './aquarium-selection-guide';

describe('AquariumSelectionGuide', () => {
  let component: AquariumSelectionGuide;
  let fixture: ComponentFixture<AquariumSelectionGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AquariumSelectionGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquariumSelectionGuide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
