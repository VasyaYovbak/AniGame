import {ComponentFixture, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';

import {RegistrationComponent} from './registration.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpErrorResponse} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {of, throwError} from "rxjs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [ HttpClientTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should make auth request', () => {
    // @ts-ignore
    const authSpy = spyOn(component.auth, 'registration')
    component.registrationForm.get("email")?.setValue("test@test");
    component.registrationForm.get("username")?.setValue("test");
    component.registrationForm.get("password")?.setValue("12345678");
    component.registrationForm.get("confirmPassword")?.setValue("12345678");

    authSpy.and.returnValue(of({
      'access_token': "123",
      user: {id: 1, username: 'test', email: "test", rating: 0, image: ""}
    }));

    component.onSubmit();

    expect(authSpy).toHaveBeenCalledTimes(1);
  });

  it('should catch and process error response', fakeAsync(() => {
    // @ts-ignore
    const authSpy = spyOn(component.auth, 'registration')
    component.registrationForm.get("email")?.setValue("test@test");
    component.registrationForm.get("username")?.setValue("test");
    component.registrationForm.get("password")?.setValue("12345678");
    component.registrationForm.get("confirmPassword")?.setValue("12345678");

    const errorResponse = new HttpErrorResponse({
      error: 'test 409 error',
      status: 409, statusText: 'Forbidden'
    });

    authSpy.and.returnValue(throwError(() => errorResponse));

    component.onSubmit();

    expect(authSpy).toHaveBeenCalledTimes(1);


  }));


  it('should stop submit because passwords not equal', fakeAsync(() => {
    // @ts-ignore
    const authSpy = spyOn(component.auth, 'registration')
    component.registrationForm.get("email")?.setValue("test@test");
    component.registrationForm.get("username")?.setValue("test");
    component.registrationForm.get("password")?.setValue("12345678");
    component.registrationForm.get("confirmPassword")?.setValue("12345679");

    authSpy.and.callThrough()

    component.onSubmit();

    expect(authSpy).toHaveBeenCalledTimes(0);

    flush();

    expect(component.passwordNotEqual).toBeFalse();
  }));
});
