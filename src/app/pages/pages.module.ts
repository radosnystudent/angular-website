import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about/about-me.component';
import { ComponentsModule } from '../components/components.module';
import { MainAppComponent } from './homepage/main-app.component';
import { CommonModule as AppCommonModule } from '../common/common.module';
import { PizzaCalculatorComponent } from './pizza-calculator/pizza-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AboutMeComponent, MainAppComponent, PizzaCalculatorComponent],
  exports: [AboutMeComponent, MainAppComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AppCommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
