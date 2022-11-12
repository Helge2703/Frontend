import { Component, OnInit } from '@angular/core';
import { consultasService } from 'src/app/services/consultas.service';
import { ConsultasModel } from 'src/app/models/ConsultasModel';


@Component({
  selector: 'app-consultas',
  templateUrl: './Consultas.Component.html',
  styleUrls: ['./Consultas.Component.scss']
})
export class ConsultasComponent implements OnInit {

  modalidadContrato : string 
    consulta: string
    fechaInicio : Date
    fechaFinal : Date
    departamentoContrato : string
    fechaConsulta : Date

  tablaConsultas = new Array <ConsultasModel>()




  constructor() { }

  ngOnInit(): void {
  }
registrar(){  
  let consultaprimera = new ConsultasModel();
  consultaprimera.modalidadContrato = this.modalidadContrato
  consultaprimera.consulta = this.consulta
  consultaprimera.fechaInicio = this.fechaInicio
  consultaprimera.fechaFinal = this.fechaFinal
  consultaprimera.departamentoContrato = this.departamentoContrato
  consultaprimera.fechaConsulta = this.fechaConsulta
 
  this.tablaConsultas.push(consultaprimera)

}

}

