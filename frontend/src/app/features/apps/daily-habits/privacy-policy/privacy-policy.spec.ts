import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { provideRouter } from '@angular/router';
import { PrivacyPolicy } from './privacy-policy';

describe('PrivacyPolicy', () => {
  let spectator: Spectator<PrivacyPolicy>;

  const createComponent = createComponentFactory({
    component: PrivacyPolicy,
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