import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface User {
  email: string,
  password: string,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  backendUrl = 'https://ani-game-backend.herokuapp.com'

  constructor(private http: HttpClient) {
  }

  login(loginData: { email: string, password: string }) {
    return this.http.post<{
      access_token: string,
      refresh_token: string,
      user: {
        id: number,
        username: string,
        email: string,
        rating: number,
        image: string
      }
    }>(this.backendUrl + '/login', loginData)
  }

  registration(registrationData: { email: string, username: string, password: string }) {
    return this.http.post<{
      access_token: string,
      refresh_token: string,
      user: {
        id: number,
        username: string,
        email: string,
        rating: number,
        image: string
      }
    }>(this.backendUrl + '/registration', registrationData)
  }

  logout(token: string) {
    return this.http.post(this.backendUrl + '/logout', {
      refresh_token: token
    });
  }

  refreshToken(token: string) {
    return this.http.post<{
      access_token: string,
      refresh_token: string,
      user: {
        id: number,
        username: string,
        email: string,
        rating: number,
        image: string
      }
    }>(this.backendUrl + '/refresh_tokens', {
      refresh_token: token
    });
  }
}
