import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LeaderboardComponent} from './leaderboard.component';
import {UserService} from "../../services/user.service";
import {of} from "rxjs";
import {TableComponent} from "../shared/table/table.component";

const userService = {
  getLeaderList: () => {
    return of([{
      id: 1,
      username: 'test',
      email: 'test@test',
      rating: 0,
      image: ""
    }])
  }
}

describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaderboardComponent, TableComponent],
      providers: [{provide: UserService, useValue: userService}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should create table with user', () => {
    const table = fixture.debugElement.nativeElement.querySelector('table');
    expect(table).toBeDefined();
    expect(component.data).toEqual([{
      id: 1,
      username: 'test',
      email: 'test@test',
      rating: 0,
      image: ""
    }])
  });
});
