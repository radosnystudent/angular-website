import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MatCardModule],
  providers: [],
  exports: [CardComponent],
})
export class ComponentsModule {}
