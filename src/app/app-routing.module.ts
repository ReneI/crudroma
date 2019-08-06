import { CandidatoComponent } from './registrar/candidato/candidato.component';
import { PageComponent } from './estilos/page/page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from './registrar/candidatos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'candidatos', component: RegistrarComponent},
  { path: 'candidato/:id', component: CandidatoComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
