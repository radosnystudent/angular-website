import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { TranslationService } from './services';
import { Languages } from './spec';
import { ThemePalette } from '@angular/material/core';
import { TranslatePipe } from './common/pipes/translate.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    NgClass,
    MatTabsModule,
    NgFor,
    RouterLinkActive,
    RouterLink,
    NgIf,
    MatIconModule,
    MatTooltipModule,
    RouterOutlet,
    TranslatePipe,
  ],
})
export class AppComponent implements OnInit {
  showNavIcon: boolean = false;
  currentLanguage: string = '';
  themePalette: ThemePalette = undefined;
  navLinks = [
    { location: '/main', translation: 'navigation.homepage', icon: 'menu' },
    {
      location: '/pizza',
      translation: 'navigation.pizzaCalculator',
      icon: 'local_pizza',
    },
    {
      location: '/about-me',
      translation: 'navigation.aboutMe',
      icon: 'account_circle',
    },
  ];
  private readonly translateService: TranslationService =
    inject(TranslationService);
  private readonly breakpointObserver: BreakpointObserver =
    inject(BreakpointObserver);

  constructor() {
    this.breakpointObserver
      .observe(['(max-width: 960px)'])
      .subscribe((result: BreakpointState) => {
        this.showNavIcon = result.matches;
      });
  }

  ngOnInit(): void {
    this.currentLanguage = this.translateService.language;
  }

  switchLanguage(): void {
    if (this.currentLanguage === Languages.En) {
      this.currentLanguage = Languages.Pl;
      this.translateService.language = Languages.Pl;
    } else {
      this.currentLanguage = Languages.En;
      this.translateService.language = Languages.En;
    }
  }
}
