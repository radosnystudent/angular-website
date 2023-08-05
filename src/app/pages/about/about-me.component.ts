import { Component } from '@angular/core';

@Component({
  selector: 'sw-about-me',
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  image = { path: 'assets/photo.png', alt: 'my photo' };
}
