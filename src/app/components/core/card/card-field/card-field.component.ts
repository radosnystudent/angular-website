import { Component, Input } from '@angular/core';
import { TranslatePipe } from '../../../../common/pipes/translate.pipe';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'sw-card-field',
  templateUrl: './card-field.component.html',
  standalone: true,
  imports: [NgClass, NgIf, TranslatePipe],
})
export class CardFieldComponent {
  @Input({ required: true }) label!: string;

  @Input({ required: false }) value?: string | number | null | undefined;

  @Input({ required: false }) description?: string;

  @Input({ required: false }) labelClass?: string;

  @Input({ required: false }) valueClass?: string;
}
