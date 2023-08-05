import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { MainAppComponent } from './pages';
import { TemplateTitleService } from './services/index';
import { AboutMeComponent } from './pages/about/about-me.component';

const routes: Routes = [
  { path: 'main', component: MainAppComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplateTitleService }],
})
export class AppRoutingModule {}
