import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about/about-me.component';
import { ComponentsModule } from '../components/components.module';
import { MainAppComponent } from './homepage/main-app.component';
import { CommonModule as AppCommonModule } from '../common/common.module';

@NgModule({
  declarations: [AboutMeComponent, MainAppComponent],
  exports: [AboutMeComponent, MainAppComponent],
  imports: [CommonModule, ComponentsModule, AppCommonModule],
})
export class PagesModule {}
