import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { TranslationService } from './services';
import { Languages } from './spec';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  showNavIcon: boolean = false;
  languages!: string[];
  currentLanguage!: string;
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

  constructor(
    private readonly translateService: TranslationService,
    private readonly breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe(['(max-width: 960px)'])
      .subscribe((result: BreakpointState) => {
        this.showNavIcon = result.matches;
      });
  }

  ngOnInit(): void {
    this.languages = this.translateService.languages;
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
