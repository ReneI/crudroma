import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Candidato } from '../../models/usuarios.model';
import { map, catchError } from 'rxjs/operators';
import { Observable, of, throwError, pipe } from 'rxjs';


@Injectable()
export class AuthService {
   URL_SERVICIOS = 'http://18.219.79.164:8080/truck/public/client';

  constructor(
    public http: HttpClient,
  ) { }

  cargarCandidatos() {

    let url = this.URL_SERVICIOS + '/candidatos';
    console.log(url);

    return this.http.get( url )
              .pipe(map( (resp: any) => {
console.log(resp);
                return resp;
              }));

  }

  cargarTipos() {

    let url = this.URL_SERVICIOS + '/types';
    return this.http.get( url )
              .pipe(map( (resp: any) => {
console.log(resp);
                return resp;
              }));

  }

  cargarCandidato( id: string ) {

    let url = this.URL_SERVICIOS + '//' + id;
console.log(url);
    return this.http.get( url ).pipe(map( (resp:any) => {
      return resp.usuario;

    }));
  }

  buscarCandidato( termino: string ) {
    let url = this.URL_SERVICIOS + '/busqueda/' + termino;
    return this.http.get( url ).pipe(map( (resp:any) => resp ));

  }

  borrarCandidato( id: string ) {

    let url = this.URL_SERVICIOS + '/candidato/' + id;
    return this.http.delete( url ).pipe(
              map( resp => {
                return resp;
              }));

  }



  guardarCandidato( candidato: Candidato ) {

    let url = this.URL_SERVICIOS + '/candidato';

      //
            return this.http.post( url, candidato ).pipe(
              map( (resp: any) => {
              console.log('ok');
                return resp;
              }));
    }



    private handleError(error: any) {
      let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      return Observable.throw(error);
    }



}
