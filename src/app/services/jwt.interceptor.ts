import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError} from 'rxjs';
import {CookieService} from "./cookie.service";
import {AuthorizationService} from "./authorization.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private cookie: CookieService, private auth: AuthorizationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<object>> {
    const accessToken = this.cookie.getAccessToken();
    if (accessToken !== null) {
      request = this.getTokenHeader(request, accessToken);
    }
    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(request, next);
      }
      return throwError(error);
    })) as Observable<HttpEvent<object>>;
  }

  getTokenHeader(request: any, token: String | null) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: any, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      const token = this.cookie.getRefreshToken();
      if (token)
        return this.auth.refreshToken(token).pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;
            this.cookie.setAllAuthCookies(token.access_token, token.refresh_token, JSON.stringify(token.user));
            this.refreshTokenSubject.next(token.access_token);
            request = this.getTokenHeader(request, token.access_token);
            return next.handle(request);
          }),
          catchError((err) => {
            this.isRefreshing = false;
            this.cookie.clearAllAuthCookies();
            return throwError(err);
          }),
        );
    }
    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.getTokenHeader(request, token)))
    );
  }
}

