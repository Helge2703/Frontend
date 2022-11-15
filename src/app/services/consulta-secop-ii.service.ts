import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsultaSecopIIService {

  url ="https://www.datos.gov.co/resource/jbjy-vk9h.json"


  constructor(private http : HttpClient) { }

  obtenerConsultasSecopII(){
    return this.http.get(this.url);
  }

  consultaPersonalizada(consulta:string){
    console.log(this.url+"?"+consulta);
    return this.http.get(this.url+"?"+consulta);
  }
}
