import {ComponentFixture, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';

import {NavigationComponent} from './navigation.component';
import {CookieService} from "../../services/cookie.service";
import {UserService} from "../../services/user.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {of} from "rxjs";
import {AuthorizationService} from "../../services/authorization.service";


const cookieService = {
  clearCookie: function () {
  },
  getAuthToken: function () {
    return null
  }
}
const auth = {
  logout: function () {
    return of(true);
  }
}
const userService = {
  getSelfUser: function () {
    return {id: 1}
  }
}
describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: CookieService,
          useValue: cookieService
        },
        {
          provide: UserService,
          useValue: userService
        },
        {
          provide: AuthorizationService, useValue: auth
        }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should isLoggedIn function return false', () => {
    expect(component.isLoggedIn()).toBeFalse()
  })

  it('should clear cookie after logout function', () => {
    let cookieSpy = spyOn(cookieService, 'clearCookie');
    component.logout();
    expect(cookieSpy).toHaveBeenCalledTimes(2);
  })

  it('should set userId after some time', (done) => {
    setTimeout(() => {
      expect(component.userId).toEqual(1);
      done();
    }, 1000)
  });
});
