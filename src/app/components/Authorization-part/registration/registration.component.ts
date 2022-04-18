import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "../../../services/cookie.service";
import {AuthorizationService} from "../../../services/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    username:new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl('',[Validators.required])
  })
  passwordNotEqual = false
  constructor(private cookie: CookieService, private auth: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {

    let data = this.registrationForm.value;
    if(data['password']!==data['confirmPassword']){
        this.passwordNotEqual = true;
        setTimeout(()=>{this.passwordNotEqual = false;},5000);
        return
    }
    delete data['confirmPassword'];
    console.log(data);
    this.auth.registration(data).subscribe((data) => {
        this.cookie.setCookie('access_token', data['access_token'], 60);
         this.cookie.setCookie('self', JSON.stringify(data['user']), 60);
        this.router.navigate(['/home']);
      }, (error) => {
          if (error.status === 409) {
            alert('User with this email or username already registered');
          }
      }
    )
  }
}
