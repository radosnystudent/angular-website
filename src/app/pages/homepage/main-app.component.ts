import { Component } from '@angular/core';
import { TranslatePipe } from 'src/app/common/pipes';
import { BubblesComponent, CardComponent } from 'src/app/components';

@Component({
  selector: 'sw-main-app',
  templateUrl: './main-app.component.html',
  standalone: true,
  imports: [CardComponent, TranslatePipe, BubblesComponent],
})
export class MainAppComponent {
  image = { path: 'assets/photo.png', alt: 'my photo' };
}
