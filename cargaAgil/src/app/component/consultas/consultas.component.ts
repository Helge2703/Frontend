import { Component, OnInit } from '@angular/core';
import {consultas} from 'src/app/models/consultas';
import { consultasService } from 'src/app/services/consultas.service';


@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {

  // id : number
  // modalidadcontrato : string 
  // consulta : string
  // fechainicio : Date
  // fachafinal : Date
  // departamentocontrato : string
  // fechaConsulta : Date
}


  constructor() { }

  ngOnInit(): void {
  }

}
