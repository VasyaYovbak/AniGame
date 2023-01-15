import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAnalyticsComponent } from './games-analytics.component';

describe('GamesAnalyticsComponent', () => {
  let component: GamesAnalyticsComponent;
  let fixture: ComponentFixture<GamesAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
