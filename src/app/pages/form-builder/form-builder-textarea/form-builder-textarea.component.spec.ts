import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderTextareaComponent } from './form-builder-textarea.component';

describe('FormBuilderTextareaComponent', () => {
  let component: FormBuilderTextareaComponent;
  let fixture: ComponentFixture<FormBuilderTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilderTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
