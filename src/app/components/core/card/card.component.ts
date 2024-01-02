import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input({ required: false }) title?: string;

  @Input({ required: false }) subtitle?: string;

  @Input({ required: false }) avatar?: string;

  @Input({ required: false }) image?: { path: string; alt: string };
}
