import { AuthService } from '../servicios/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidato } from '../models/usuarios.model';
import swal from 'sweetalert';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-registrar',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class RegistrarComponent implements OnInit {




  candidatos: Candidato[] = [];
  cargando: boolean = true;

  constructor(
    public _candidato: AuthService
  ) { }

  ngOnInit() {
    this.cargarCandidatos();
    console.log(this.candidatos);
  }

  cargarCandidatos() {
    this.cargando = true;
    this._candidato.cargarCandidatos()
          .subscribe( candidatos =>{ this.candidatos = candidatos;
            this.cargando = false;

          });
  }

  buscarCandidato( termino: string ) {

    if ( termino.length <= 0 ) {
      this.cargarCandidatos();
      return;
    }

    this._candidato.buscarCandidato( termino )
            .subscribe( candidatos =>  this.candidatos = candidatos );
  }

  borrarCandidato( candidato: Candidato ) {
    this._candidato.borrarCandidato(candidato.idCandidato)
            .subscribe( () => { this.cargarCandidatos();

            }, (err) => swal('No logre encontrar la direcciôn del endpoint de borrar, Rene Israel I . ') );

  }


paginaionCandidatos(){

}



}
