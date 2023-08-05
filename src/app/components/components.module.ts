import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './core';
import { CommonModule } from '@angular/common';
import { CommonModule as AppCommonModule } from '../common/common.module';

@NgModule({
  declarations: [CardComponent],
  providers: [],
  exports: [CardComponent],
  imports: [CommonModule, MatCardModule, AppCommonModule],
})
export class ComponentsModule {}
