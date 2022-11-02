import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'form-builder-textarea',
  templateUrl: './form-builder-textarea.component.html',
  styleUrls: ['./form-builder-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormBuilderTextareaComponent),
      multi: true
    }
  ]
})
export class FormBuilderTextareaComponent implements ControlValueAccessor, OnInit, OnDestroy {
  private onChange!: (data: string) => void;

  private onTouched!: () => void;

  private destroy$: Subject<void> = new Subject();

  @Input() label!: string;

  control: FormControl = new FormControl();

  constructor() { }

  writeValue(value: string): void {
    if(value) {
      this.control.setValue(value, { emitEvent: false });
    } else {
      this.control.reset(null, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit(): void {
    this.control.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.onChange(value);
      this.onTouched();
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
