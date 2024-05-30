import {
  enableProdMode,
  APP_INITIALIZER,
  importProvidersFrom,
} from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { TemplateTitleService, TranslationService } from './app/services';
import { TitleStrategy, provideRouter } from '@angular/router';
import { routes } from './app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      MatTabsModule,
      MatIconModule,
      MatTooltipModule
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: (translationService: TranslationService) => {
        return () => translationService.initTranslations();
      },
      deps: [TranslationService],
      multi: true,
    },
    { provide: TitleStrategy, useClass: TemplateTitleService },
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch(err => console.error(err));
