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
        url: 'https://bluefoxaquarismo.space/auth/',
        realm: 'Blue_Fox_Group',
        clientId: 'blue-fox-aquariums',
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
    const claims = this.kc?.tokenParsed;
    return claims?.['preferred_username'] as string;
  }

  getFirstName(): string | undefined {
    const claims = this.kc?.tokenParsed;
    return claims?.['given_name'] as string;
  }

  getLastName(): string | undefined {
    const claims = this.kc?.tokenParsed;
    return claims?.['family_name'] as string;
  }

  getUserFullName(): string | undefined {
    const claims = this.kc?.tokenParsed;
    if (!claims) return undefined;

    const fn = (claims['given_name'] as string) || '';
    const ln = (claims['family_name'] as string) || '';

    const fullName = `${fn} ${ln}`.trim();
    return fullName || undefined;
  }
}