import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckBoxItem } from './form-builder-checkbox.model';

@Component({
  selector: 'form-builder-checkbox',
  templateUrl: './form-builder-checkbox.component.html',
  styleUrls: ['./form-builder-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormBuilderCheckboxComponent),
      multi: true
    }
  ]
})
export class FormBuilderCheckboxComponent implements ControlValueAccessor {
  private onChange!: (data: CheckBoxItem[]) => void;
  private onTouched!: () => void;

  @Input() viewMode!: boolean;

  @Input() label!: string;

  @Output() onSelectItem: EventEmitter<CheckBoxItem> = new EventEmitter()

  model: CheckBoxItem[] = [];
  constructor() { }

  writeValue(value: CheckBoxItem[]): void {
    this.model = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  updateItem(item: CheckBoxItem): void {
    this.resetOtherItem(item);
    this.onChangeValue();
    this.onSelectItem.emit(item);
  }

  updateOtherItem(item: CheckBoxItem): void {
    if(item.other) {
      this.onChangeValue();
    }
  }

  private onChangeValue(): void {
    this.onChange(this.model);
    this.onTouched();
  }

  private resetOtherItem(item: CheckBoxItem): void {
    if(item.id === 0) {
      item!.other = '';
    }
  }
}
