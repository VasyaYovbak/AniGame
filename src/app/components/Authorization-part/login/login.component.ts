import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CookieService} from "../../../services/cookie.service";
import {AuthorizationService} from "../../../services/authorization.service";
import {Router} from "@angular/router";
import {getEmailValidators} from "../../../../assets/type-script/validators/fields/email";
import {getPasswordValidators} from "../../../../assets/type-script/validators/fields/password";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', getEmailValidators()),

    password: new FormControl('',
      getPasswordValidators())
  })

  serverErrorMessage: string = '';

  constructor(private cookie: CookieService, private auth: AuthorizationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.serverErrorMessage = '';
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({
        next: data => {
          this.cookie.setAllAuthCookies(data['access_token'], data['refresh_token'], JSON.stringify(data['user']));
          this.router.navigate(['/game/search']);
        },
        error: err => {
          if (err.status >= 400 && err.status < 500) {
            this.serverErrorMessage = err?.error?.error;
          }
        }
      })
    }
  }
}
