/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sw-number-input',
  templateUrl: './number-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NumberInputComponent,
    },
  ],
})
export class NumberInputComponent implements ControlValueAccessor {
  @Input({ required: true }) label!: string;

  value!: number;
  disabled = false;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (value: number) => {};

  onTouched = () => {};

  constructor() {}

  onValueChange(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }
    this.value = (event.target as HTMLInputElement).value as unknown as number;
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: number): void {
    this.value = value;
  }

  markAsTouched(): void {
    this.onTouched();
  }
}
