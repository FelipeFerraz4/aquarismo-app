import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { AuthService } from './auth-service';

jest.mock('keycloak-js', () => {
  return jest.fn().mockImplementation(() => ({
    init: jest.fn().mockResolvedValue(true),
    login: jest.fn(),
    logout: jest.fn(),
    token: 'fake-token',
    authenticated: true,
    tokenParsed: { preferred_username: 'test-user' },
  }));
});

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    });

    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize keycloak', async () => {
    const result = await service.init();
    expect(result).toBe(true);
  });

  it('should return token', () => {
    expect(service.getToken()).toBe('fake-token');
  });

  it('should return logged in status', () => {
    expect(service.isLoggedIn()).toBe(true);
  });

  it('should return username', () => {
    expect(service.getUsername()).toBe('test-user');
  });

  it('should call login', () => {
    const spy = jest.spyOn((service as any).kc, 'login');
    service.login();
    expect(spy).toHaveBeenCalled();
  });

  it('should call logout', () => {
    const spy = jest.spyOn((service as any).kc, 'logout');
    service.logout();
    expect(spy).toHaveBeenCalled();
  });
});