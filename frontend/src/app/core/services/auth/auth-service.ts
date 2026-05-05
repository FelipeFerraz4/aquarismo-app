import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private kc?: Keycloak;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.kc = new Keycloak({
        url: 'http://localhost:8080/auth/',
        realm: 'BlueFox',
        clientId: 'aquarismo-web',
      });
    }
  }

  async init(): Promise<boolean> {
    if (!this.isBrowser || !this.kc) {
      return false;
    }

    return await this.kc.init({
      onLoad: 'check-sso',
      checkLoginIframe: false,
    });
  }

  login() {
    this.kc?.login();
  }

  logout() {
    if (!this.kc || !this.isBrowser) return;

    this.kc.logout({
      redirectUri: window.location.origin,
    });
  }

  getToken(): string | undefined {
    return this.kc?.token;
  }

  async getValidToken(): Promise<string | undefined> {
    if (!this.kc) return undefined;

    try {
      await this.kc.updateToken(30); // renova se faltar <30s
      return this.kc.token;
    } catch {
      this.login();
      return undefined;
    }
  }

  isLoggedIn(): boolean {
    return !!this.kc?.authenticated;
  }

  getUsername(): string | undefined {
    return this.kc?.tokenParsed?.['preferred_username'] as string;
  }
}