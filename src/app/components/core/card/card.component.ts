import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() title?: string;

  @Input() subtitle?: string;

  @Input() avatar?: string;

  @Input() image?: { path: string; alt: string };
}
