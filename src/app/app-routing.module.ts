import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeInitComponent } from './home-init/home-init.component';
import { QSPageComponent } from './qspage/qspage.component';
import { CuPageComponent } from './cu-page/cu-page.component';
import { NPageComponent } from './npage/npage.component';
import { CoPageComponent } from './co-page/co-page.component';
import { AppPageComponent } from './app-page/app-page.component';


const routes: Routes = [
  { path: '', component: HomeInitComponent},
  { path: 'home', component: HomeInitComponent},
  { path: 'quienesSomos', component: QSPageComponent},
  { path: 'cursos', component: CuPageComponent},
  { path: 'noticias', component: NPageComponent},
  { path: 'contacto', component: CoPageComponent},
  { path: 'app', component: AppPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
