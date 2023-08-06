import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-card-field',
  templateUrl: './card-field.component.html',
})
export class CardFieldComponent {
  @Input({ required: true }) label!: string;

  @Input({ required: false }) value!: string | number | null | undefined;

  @Input({ required: false }) description!: string;

  @Input({ required: false }) labelClass!: string;

  @Input({ required: false }) valueClass!: string;
}
