import { Component, effect, input } from '@angular/core';
import { isNumber } from '@sindresorhus/is';

@Component({
  selector: 'sw-bubbles',
  templateUrl: './bubbles.component.html',
  standalone: true,
})
export class BubblesComponent {
  numberOfBubbles = input<number>();

  bubbles: string[] = [];

  constructor() {
    effect(() => {
      const n = this.numberOfBubbles();
      if (isNumber(n)) {
        this.bubbles = [];
        for (let i = 0; i < n; i++) {
          this.bubbles.push('<span class="dot"></span>');
        }
      }
    });
  }
}
