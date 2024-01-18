import { Component, Input, OnDestroy, inject } from '@angular/core';
import { ValueAccessorDirective } from 'src/app/common/directives';
import { TranslatePipe } from '../../../common/pipes/translate.pipe';
import { AsyncPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'sw-number-input',
  templateUrl: './number-input.component.html',
  hostDirectives: [ValueAccessorDirective],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
    TranslatePipe,
    ReactiveFormsModule,
  ],
})
export class NumberInputComponent implements OnDestroy {
  @Input({ required: true }) label!: string;

  value: number | undefined;

  valueAccessor: ValueAccessorDirective<number> = inject(
    ValueAccessorDirective<number>
  );

  private disabled = false;

  private readonly destroyed$ = new Subject();

  constructor() {
    this.valueAccessor.disabled
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value: boolean) => {
        this.disabled = value;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.complete();
  }

  onValueChange(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }
    const value = (event.target as HTMLInputElement).value as unknown as number;

    this.valueAccessor.valueChange(value);
    this.valueAccessor.touchedChange(true);
  }
}
