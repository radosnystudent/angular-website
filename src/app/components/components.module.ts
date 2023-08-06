import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './core';
import { CommonModule as AppCommonModule } from '../common/common.module';
import { NumberInputComponent } from './core/number-input/number-input.component';
import { ButtonComponent } from './core/button/button.component';
import { CardFieldComponent } from './core/card/card-field/card-field.component';

@NgModule({
  declarations: [
    CardComponent,
    NumberInputComponent,
    ButtonComponent,
    CardFieldComponent,
  ],
  providers: [],
  exports: [
    CardComponent,
    NumberInputComponent,
    ButtonComponent,
    CardFieldComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AppCommonModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class ComponentsModule {}
