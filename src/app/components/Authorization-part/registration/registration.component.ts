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
    if (this.registrationForm.valid) {
      this.auth.registration(data).subscribe({
          next: (data) => {
            this.cookie.setCookie('access_token', data['access_token'], 60);
            this.cookie.setCookie('self', JSON.stringify(data['user']), 60);
            this.router.navigate(['/home']);
          }, error: (error) => {
            if (error.status === 409) {
              alert('User with this email or username already registered');
            }
          }
        }
      )
    }

  }
}
