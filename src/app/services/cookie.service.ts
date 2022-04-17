import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

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

  getAuthToken() {
    return this.getCookie('access_token');
  }
}
