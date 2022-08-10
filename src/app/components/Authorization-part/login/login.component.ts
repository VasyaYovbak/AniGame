import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "../../../services/cookie.service";
import {AuthorizationService} from "../../../services/authorization.service";
import {Router} from "@angular/router";
import {fieldDecorator} from "../../../../assets/type-script/validators/decorators";
import {
  getMinFieldLengthError,
  requiredFieldError,
  wrongEmailError
} from "../../../../assets/type-script/validators/constans/errors";
import {email, password} from "../../../../assets/type-script/validators/constans/field-names";
import {passwordMinLength} from "../../../../assets/type-script/validators/constans/field-constrains";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [fieldDecorator(email, wrongEmailError, Validators.email),
      fieldDecorator(email, requiredFieldError, Validators.required)]),

    password: new FormControl('',
      [fieldDecorator(password, getMinFieldLengthError(password, passwordMinLength),
        Validators.minLength(passwordMinLength)), fieldDecorator(password, requiredFieldError, Validators.required)])
  })

  constructor(private cookie: CookieService, private auth: AuthorizationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({
        next: data => {
          this.cookie.setCookie('access_token', data['access_token'], 60);
          this.cookie.setCookie('self', JSON.stringify(data['user']), 60);
          this.router.navigate(['/home']);
        },
        error: err => {
          if (err.status === 403) {
            alert("Wrong password or user with this email doesn't exist");
          }
        }
      })
    }

  }
}
