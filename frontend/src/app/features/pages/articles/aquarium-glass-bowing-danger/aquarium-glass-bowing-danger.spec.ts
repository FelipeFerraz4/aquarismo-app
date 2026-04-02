import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumGlassBowingDanger } from './aquarium-glass-bowing-danger';

describe('AquariumGlassBowingDanger', () => {
  let component: AquariumGlassBowingDanger;
  let fixture: ComponentFixture<AquariumGlassBowingDanger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AquariumGlassBowingDanger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquariumGlassBowingDanger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
