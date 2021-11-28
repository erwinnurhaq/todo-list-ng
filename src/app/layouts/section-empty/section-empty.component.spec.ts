import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEmptyComponent } from './section-empty.component';

describe('SectionEmptyComponent', () => {
  let component: SectionEmptyComponent;
  let fixture: ComponentFixture<SectionEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
