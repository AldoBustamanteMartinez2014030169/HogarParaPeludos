import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerdidosComponent } from './perdidos/perdidos.component';
import { HomeComponent } from './home/home.component';
import { PublicarComponent } from './publicar/publicar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'perdidos', component: PerdidosComponent },
  { path: 'publicar', component: PublicarComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
