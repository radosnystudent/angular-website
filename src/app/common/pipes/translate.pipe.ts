import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from 'src/app/services';

@Pipe({
  name: 'translate',
  pure: false,
  standalone: true,
})
export class TranslatePipe implements PipeTransform {
  private readonly translationService: TranslationService =
    inject(TranslationService);

  transform(value: string): string {
    return this.translationService.translate(value);
  }
}
