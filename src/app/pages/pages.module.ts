import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about/about-me.component';
import { ComponentsModule } from '../components/components.module';
import { MainAppComponent } from './homepage/main-app.component';

@NgModule({
  declarations: [AboutMeComponent, MainAppComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [AboutMeComponent, MainAppComponent],
})
export class PagesModule {}
