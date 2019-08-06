import { Component, OnInit } from '@angular/core';
import { Candidato } from '../../models/usuarios.model';
import { AuthService } from './../../servicios/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalComponent } from '../../complemento/ventana/modal.component';
import { Tipos } from 'src/app/models/tipos.model';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {

  formulario: FormGroup;
  tipos: Tipos[] = [];
  constructor(
    public _candidatoService: AuthService,
    public router: Router,
    public activatedRoute: AuthService,
    public _modalUploadService: AuthService
  ) {

this.cargarPuestos();

  }

  cargarPuestos(){

    this._candidatoService.cargarTipos().subscribe( (resp: any) => {
      this.tipos = resp;
    });

    }
  guardarCandidato( formulario: Candidato ) {
console.log(formulario);
    this._candidatoService.guardarCandidato(formulario).subscribe( (resp: any) => {
      this.tipos = resp;
      swal('Guardado ');
    });
  }

  ngOnInit() {

    this.formulario = new FormGroup({
     name: new FormControl('', Validators.required),
     apellidos: new FormControl('', Validators.required),
     active: new FormControl(true, Validators.required),
     idType: new FormControl ('', Validators.required)

    });
  }

}
