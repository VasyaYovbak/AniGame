import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "../../../services/cookie.service";
import {HttpClient} from "@angular/common/http";
import {AuthorizationService} from "../../../services/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required])
  })

  constructor(private cookie: CookieService, private auth: AuthorizationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.login(this.loginForm.value).subscribe((data) => {
        this.cookie.setCookie('access_token', data['access_token'], 60);
        this.cookie.setCookie('self', JSON.stringify(data['user']), 60);
        this.router.navigate(['/home']);
      }, (error) => {
        if (error.status === 403) {
          alert("Wrong password or user with this email doesn't exist");

        }
      }
    )
  }
}
