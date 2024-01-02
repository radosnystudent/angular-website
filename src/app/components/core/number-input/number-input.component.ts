import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorDirective } from 'src/app/common/directives';

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
  hostDirectives: [ValueAccessorDirective],
})
export class NumberInputComponent {
  @Input({ required: true }) label!: string;

  value: number | undefined;

  constructor(public valueAccessor: ValueAccessorDirective<number>) {}

  onValueChange(event: KeyboardEvent): void {
    if (this.valueAccessor.disabled) {
      return;
    }
    const value = (event.target as HTMLInputElement).value as unknown as number;

    this.valueAccessor.valueChange(value);
    this.valueAccessor.touchedChange(true);
  }
}
