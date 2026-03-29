import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumSize } from './aquarium-size';

describe('AquariumSize', () => {
  let component: AquariumSize;
  let fixture: ComponentFixture<AquariumSize>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AquariumSize]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquariumSize);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
