import {ComponentFixture, fakeAsync, flush, TestBed} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {UserService} from "../../services/user.service";
import {of} from "rxjs";


const userService = {
  getProfile: function () {
    return of({
      user_info: {
        email: "test@test",
        username: "test",
        image: ""
      },
      games: []
    })
  }
}

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{
        provide: UserService,
        useValue: userService
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout user after logout function', fakeAsync(() => {
    flush();
    expect(component.profile).toEqual({
      user_info: {
        email: "test@test",
        username: "test",
        image: ""
      },
      games: []
    })

  }));
});
