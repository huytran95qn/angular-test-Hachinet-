import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewMyAnswersComponent } from './review-my-answers.component';

describe('ReviewMyAnswersComponent', () => {
  let component: ReviewMyAnswersComponent;
  let fixture: ComponentFixture<ReviewMyAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewMyAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewMyAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
