import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnswerOptionComponent } from './add-answer-option.component';

describe('AddAnswerOptionComponent', () => {
  let component: AddAnswerOptionComponent;
  let fixture: ComponentFixture<AddAnswerOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnswerOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnswerOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
