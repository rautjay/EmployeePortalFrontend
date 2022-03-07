import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTabComponent } from './feedback-tab.component';

describe('FeedbackTabComponent', () => {
  let component: FeedbackTabComponent;
  let fixture: ComponentFixture<FeedbackTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
