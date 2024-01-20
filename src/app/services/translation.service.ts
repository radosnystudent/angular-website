import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, lastValueFrom, take, tap, throwError } from 'rxjs';
import { Languages, Translations } from '../spec';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  public languages: string[] = [Languages.En, Languages.Pl];
  public language: string = Languages.En;
  private translations: Translations = {};
  private readonly httpClient: HttpClient = inject(HttpClient);

  initTranslations(): Promise<Translations> {
    const call = this.httpClient
      .get<Translations>('/.netlify/functions/translations')
      .pipe(
        take(1),
        catchError(error => {
          return throwError(() => new Error(error));
        }),
        tap((reponse: Translations) => {
          this.translations = reponse;
        })
      );

    return lastValueFrom(call);
  }

  translate(key: string): string {
    if (this.translations[this.language]) {
      return this.translations[this.language][key] ?? key;
    }

    return key;
  }
}
