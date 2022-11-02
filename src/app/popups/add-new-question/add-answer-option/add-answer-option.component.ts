import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { CheckBoxItem } from 'src/app/pages/form-builder/form-builder-checkbox/form-builder-checkbox.model';
import { getRandomId } from 'src/app/shared/shared.function';

@Component({
  selector: 'add-answer-option',
  templateUrl: './add-answer-option.component.html',
  styleUrls: ['./add-answer-option.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddAnswerOptionComponent),
      multi: true
    },
    {provide: MatFormFieldControl, useExisting: AddAnswerOptionComponent}
  ]
})
export class AddAnswerOptionComponent implements ControlValueAccessor {
  private onChange!: (data: CheckBoxItem[]) => void;

  private onTouched!: () => void;

  maxAnswerOption = 5;

  answerOptions: CheckBoxItem[] = [];
  constructor() { }

  writeValue(value: CheckBoxItem[]): void {
    this.answerOptions = value || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  addAnotherAnswer(): void {
    if(this.maxAnswerOption > this.answerOptions.length) {
      this.answerOptions.push(
        new CheckBoxItem(this.getAnswerId())
      );
      this.updateValue();
    }
  }

  updateValue(): void {
    this.onChange(this.answerOptions);
    this.onTouched();
  }

  remove(item: CheckBoxItem): void {
    this.answerOptions = this.answerOptions.filter(answer => answer.id !== item.id);
    this.updateValue();
  }

  private getAnswerId(): number {
    const id = getRandomId();
    if(this.answerOptions && this.answerOptions.some(answer => answer.id === id)) {
      return this.getAnswerId();
    }

    return id;
  }
}
