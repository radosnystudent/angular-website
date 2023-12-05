/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, OnDestroy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

@Directive({
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ValueAccessorDirective),
      multi: true,
    },
  ],
})
export class ValueAccessorDirective<T>
  implements ControlValueAccessor, OnDestroy
{
  private onChange: ((value: T) => void) | undefined;
  private onTouched: ((value: boolean) => void) | undefined;
  private valueSubject = new Subject<T>();
  private disabledSubject = new Subject<boolean>();
  readonly value = this.valueSubject.asObservable();
  readonly disabled = this.disabledSubject.asObservable();

  constructor() {}

  valueChange(v: T): void {
    this.onChange?.(v);
  }

  touchedChange(v: boolean): void {
    this.onTouched?.(v);
  }

  writeValue(obj: T): void {
    this.valueSubject.next(obj);
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: boolean) => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledSubject.next(isDisabled);
  }

  ngOnDestroy(): void {
    this.valueSubject.complete();
    this.disabledSubject.complete();
  }
}
