import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAppComponent } from './main-app.component';

@NgModule({
  declarations: [MainAppComponent],
  imports: [CommonModule],
  exports: [MainAppComponent],
})
export class MainAppModule {}
