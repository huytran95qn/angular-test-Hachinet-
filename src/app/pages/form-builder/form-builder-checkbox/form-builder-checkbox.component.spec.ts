import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderCheckboxComponent } from './form-builder-checkbox.component';

describe('FormBuilderCheckboxComponent', () => {
  let component: FormBuilderCheckboxComponent;
  let fixture: ComponentFixture<FormBuilderCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilderCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
