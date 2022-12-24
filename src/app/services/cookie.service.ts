import {Injectable} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  accessTokenExpiration: number = 3;
  refreshTokenExpiration = 12 * 60;

  constructor() {
  }

  setCookie(name: string, value: string, minutes: number) {
    let expires = '';
    if (minutes) {
      let date = new Date();
      date.setTime(date.getTime() + minutes * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }

  getCookie(name: string) {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  clearCookie(name: string) {
    let date = new Date();
    date.setTime(date.getTime() + 1);
    let expires = '; expires=' + date.toUTCString();
    document.cookie = name + '=' + '' + expires + '; path=/';
  }

  getAccessToken() {
    return this.getCookie('access_token');
  }

  getRefreshToken() {
    return this.getCookie('refresh_token');
  }

  getUserData(){
    return this.getCookie('self')
  }

  isAuthenticated() {
    return this.getAccessToken() && this.getRefreshToken()
  }

  setAllAuthCookies(access: String | undefined, refresh: String | undefined, userData: string) {
    this.setCookie("access_token", String(access), this.accessTokenExpiration);
    this.setCookie("refresh_token", String(refresh), this.refreshTokenExpiration);
    this.setCookie('self', userData, this.refreshTokenExpiration);
  }

  clearAllAuthCookies(){
    this.clearCookie('access_token');
    this.clearCookie('refresh_token');
    this.clearCookie('self');
  }
}
