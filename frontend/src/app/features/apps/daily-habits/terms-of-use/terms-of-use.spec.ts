import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { provideRouter } from '@angular/router';
import { TermsOfUse } from './terms-of-use';

describe('TermsOfUse', () => {
  let spectator: Spectator<TermsOfUse>;

  const createComponent = createComponentFactory({
    component: TermsOfUse,
    providers: [provideRouter([])]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should set current year on init', () => {
    const currentYear = new Date().getFullYear();
    expect(spectator.component.currentYear).toBe(currentYear);
  });
});
