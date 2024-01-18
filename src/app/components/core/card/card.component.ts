import { Component, Input } from '@angular/core';
import { TranslatePipe } from '../../../common/pipes/translate.pipe';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'sw-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [MatCardModule, NgIf, TranslatePipe],
})
export class CardComponent {
  @Input({ required: false }) title?: string;

  @Input({ required: false }) subtitle?: string;

  @Input({ required: false }) avatar?: string;

  @Input({ required: false }) image?: { path: string; alt: string };
}
