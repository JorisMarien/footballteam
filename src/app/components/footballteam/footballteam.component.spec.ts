import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballteamComponent } from './footballteam.component';

describe('FootballteamComponent', () => {
  let component: FootballteamComponent;
  let fixture: ComponentFixture<FootballteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
