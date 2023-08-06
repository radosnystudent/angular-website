import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { AboutMeComponent } from './about/about-me.component';
import { ComponentsModule } from '../components/components.module';
import { MainAppComponent } from './homepage/main-app.component';
import { CommonModule as AppCommonModule } from '../common/common.module';
import { PizzaCalculatorComponent } from './pizza-calculator/pizza-calculator.component';

@NgModule({
  declarations: [AboutMeComponent, MainAppComponent, PizzaCalculatorComponent],
  exports: [AboutMeComponent, MainAppComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AppCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
})
export class PagesModule {}
