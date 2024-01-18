import { Component } from '@angular/core';
import { TranslatePipe } from '../../common/pipes/translate.pipe';
import { CardComponent } from '../../components/core/card/card.component';

@Component({
  selector: 'sw-about-me',
  templateUrl: './about-me.component.html',
  standalone: true,
  imports: [CardComponent, TranslatePipe],
})
export class AboutMeComponent {
  image = { path: 'assets/photo.png', alt: 'my photo' };
}
