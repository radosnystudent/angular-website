import { Component, effect, input } from '@angular/core';

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
      if (typeof n === 'number') {
        this.resetBubbles();
        this.fillBubbles(n);
      }
    });
  }

  private resetBubbles(): void {
    this.bubbles = [];
  }

  private fillBubbles(n: number | undefined): void {
    if (n === undefined || n === null) return;

    for (let i = 0; i < n; i++) {
      this.bubbles.push('<span class="dot"></span>');
    }
  }
}
