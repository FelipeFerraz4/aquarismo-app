import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // public kc: Keycloak = new Keycloak({
  //   url: 'http://localhost:8080',
  //   realm: 'BlueFox',
  //   clientId: 'aquarismo-web',
  // });

  // public init(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.kc.init({
  //       onLoad: 'login-required',
  //       checkLoginIframe: false,
  //       // Configuraões necessárias para redirecionamento
  //       redirectUri: `${window.location.origin}/`,
  //       silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
  //     })
  //     .then(() => resolve())
  //     .catch(reject);
  //   });
  // }

}
