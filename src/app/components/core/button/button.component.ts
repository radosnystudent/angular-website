import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sw-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input({ required: true }) label!: string;

  @Input({ required: false }) class!: string;

  @Input({ required: false }) color: 'primary' | 'accent' | 'warn' | undefined =
    undefined;

  @Input({ required: false }) type: 'raised' | 'flat' | 'stroked' | 'default' =
    'default';

  @Input({ required: false }) disabled: boolean = false;

  @Output() clicked: EventEmitter<void> = new EventEmitter();

  click(): void {
    this.clicked.emit();
  }
}
