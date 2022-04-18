import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {CommonModule} from "@angular/common";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {of, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [CommonModule, HttpClientTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should make login request', () => {
    // @ts-ignore
    const authSpy = spyOn(component.auth, 'login')
    component.loginForm.get("email")?.setValue("test@test");
    component.loginForm.get("password")?.setValue("12345678");

    authSpy.and.returnValue(of({
      'access_token': "123",
      user: {id: 1, username: 'test', email: "test", rating: 0, image: ""}
    }));

    component.onSubmit();

    expect(authSpy).toHaveBeenCalledTimes(1);
  });

  it('should catch and process error response', fakeAsync(() => {
    // @ts-ignore
    const authSpy = spyOn(component.auth, 'login')
    component.loginForm.get("email")?.setValue("test@test");
    component.loginForm.get("password")?.setValue("12345678");

    const errorResponse = new HttpErrorResponse({
      error: 'test 403 error',
      status: 403, statusText: 'Forbidden'
    });

    authSpy.and.returnValue(throwError(() => errorResponse));

    component.onSubmit();

    expect(authSpy).toHaveBeenCalledTimes(1);
  }));

});
