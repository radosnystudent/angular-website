import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components';
import { HttpClientModule } from '@angular/common/http';
import { TranslationService } from './services';
import { CommonModule as AppCommonModule } from './common/common.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppCommonModule,
    PagesModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (translationService: TranslationService) => {
        return () => translationService.initTranslations();
      },
      deps: [TranslationService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
