import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PageComponent } from './estilos/page/page.component';
import {AuthService} from './servicios/usuario/usuario.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstilosModule } from './estilos/estilos.module';
import { RegistrarComponent } from './registrar/candidatos.component';
import { HomeComponent } from './home/home.component';
import { CandidatoComponent } from './registrar/candidato/candidato.component';
import { ModalComponent } from './complemento/ventana/modal.component';
import { ModalService } from './complemento/ventana/modal.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,PageComponent, HomeComponent, CandidatoComponent, ModalComponent
  ],
  imports: [ ReactiveFormsModule,
    FormsModule, HttpClientModule,  [SweetAlert2Module.forRoot()],
    BrowserModule,
    AppRoutingModule,
    EstilosModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
