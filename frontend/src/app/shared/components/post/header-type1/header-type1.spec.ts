import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderType1 } from './header-type1';

describe('HeaderType1', () => {
  let component: HeaderType1;
  let fixture: ComponentFixture<HeaderType1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderType1],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderType1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
