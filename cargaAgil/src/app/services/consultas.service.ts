import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultasComponent } from '../component/consultas/consultas.component';


@Injectable({
  providedIn: 'root'
})
export class consultasService {


  url: string = "http://localhost:3000/personas";

  constructor(public http: HttpClient) { }

  obtenerConsultas(){
    return this.http.get(this.url, {headers: {'Content-Type': 'application/json'}});
  }
  
}
