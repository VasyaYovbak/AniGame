import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "../../../services/cookie.service";
import {AuthorizationService} from "../../../services/authorization.service";
import {Router} from "@angular/router";
import {getEmailValidators} from "../../../../assets/type-script/validators/fields/email";
import {getPasswordValidators} from "../../../../assets/type-script/validators/fields/password";
import {getUsernameValidators} from "../../../../assets/type-script/validators/fields/username";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['/registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup({
    email: new FormControl('', getEmailValidators()),
    username: new FormControl('', getUsernameValidators()),
    password: new FormControl('', getPasswordValidators()),
  })

  serverErrorMessage: string = '';

  showPassword: boolean = false;

  showHidePasswordToggle() {
    this.showPassword = !this.showPassword;
  }

  constructor(private cookie: CookieService, private auth: AuthorizationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let data = this.registrationForm.value;
    this.serverErrorMessage = '';
    if (this.registrationForm.valid) {
      this.auth.registration(data).subscribe({
          next: (data) => {
            this.cookie.setAllAuthCookies(data['access_token'], data['refresh_token'], JSON.stringify(data['user']));
            this.router.navigate(['/game/search']);
          }, error: (err) => {
            if (err.status >= 400 && err.status < 500) {
              this.serverErrorMessage = err?.error?.error;
            }
          }
        }
      )
    }

  }
}
