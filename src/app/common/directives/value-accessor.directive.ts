import { Directive, OnDestroy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

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
  readonly value!: Observable<T>;
  readonly disabled!: Observable<boolean>;
  private onChange: ((value: T) => void) | undefined;
  private onTouched: ((value: boolean) => void) | undefined;
  private valueSubject = new Subject<T>();
  private disabledSubject = new Subject<boolean>();

  constructor() {
    this.value = this.valueSubject.asObservable();
    this.disabled = this.disabledSubject.asObservable();
  }

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
