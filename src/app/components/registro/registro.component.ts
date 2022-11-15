import { Component, OnInit } from '@angular/core';
import { PersonaModel } from 'src/app/model/persona-model';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  id: number;
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  genero: string = '';
  departamento: string = '';
  municipio: string = '';
  servidorPublico: boolean = false;
  numeroContacto: number = 0;
  fechaNacimiento: string;
  password: string = '';

  listadoPersonas = new Array<PersonaModel>();

  constructor(private registroService: RegistroService) {}

  ngOnInit(): void {
    this.registroService.obtenerPersonas().subscribe((data) => {
      this.listadoPersonas = Object.values(data);
    });
  }

  registro() {
    let persona = new PersonaModel();

    persona.id = this.id;
    persona.nombre = this.nombre;
    persona.apellido = this.apellido;
    persona.email = this.email;
    persona.genero = this.genero;
    persona.departamento = this.departamento;
    persona.municipio = this.municipio;
    persona.servidorPublico = this.servidorPublico;
    persona.numeroContacto = this.numeroContacto;
    persona.fechaNacimiento = this.fechaNacimiento;
    persona.password = this.password;

    this.registroService.registarPersona(persona).subscribe((data) => {
      this.listadoPersonas.push(persona);
    });
  }
}
