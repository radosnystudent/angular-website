import { Routes } from '@angular/router';
import { MainAppComponent } from './app/pages';
import { AboutMeComponent } from './app/pages/about/about-me.component';
import { PizzaCalculatorComponent } from './app/pages/pizza-calculator/pizza-calculator.component';

export const routes: Routes = [
  { path: 'main', component: MainAppComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'pizza', component: PizzaCalculatorComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];
