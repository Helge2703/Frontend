import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaModel } from '../model/persona-model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url="http://[::1]:3000/personas";

  constructor(private http : HttpClient) { }


  obtenerPersonas(){
    return this.http.get(this.url);
  }
  registarPersona(persona : PersonaModel){
    return this.http.post(this.url, persona);
  }
}