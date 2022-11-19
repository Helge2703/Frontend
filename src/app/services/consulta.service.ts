import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultaModel } from '../model/consulta-model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  url="http://[::1]:3000/consultas";



  constructor(private http : HttpClient) { }


  obtenerConsultas(){
    return this.http.get(this.url);
  }

  registarConsulta(consulta : ConsultaModel){
    return this.http.post(this.url,consulta);
  }
}