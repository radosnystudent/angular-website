import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from 'src/app/services';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private readonly translationService: TranslationService) {}

  transform(value: string): string {
    return this.translationService.translate(value);
  }
}
