import { Routes } from '@angular/router';
import { MainAppComponent } from './app/pages';
import { PizzaCalculatorComponent } from './app/pages/pizza-calculator/pizza-calculator.component';

export const routes: Routes = [
  { path: 'main', component: MainAppComponent },
  { path: 'pizza', component: PizzaCalculatorComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];
