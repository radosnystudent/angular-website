import { Component, OnInit } from '@angular/core';
import { TranslationService } from './services';
import { Languages } from './spec';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  languages!: string[];
  currentLanguage!: string;

  constructor(private readonly translateService: TranslationService) {}

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
