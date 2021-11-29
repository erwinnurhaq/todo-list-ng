import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActivityCardComponent } from './home-activity-card.component';

describe('ActivityCardComponent', () => {
  let component: HomeActivityCardComponent;
  let fixture: ComponentFixture<HomeActivityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeActivityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeActivityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
