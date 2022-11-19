import { Component, EventEmitter, OnInit } from '@angular/core';
import { ConsultaModel } from 'src/app/model/consulta-model';
import { ConsultaService } from 'src/app/services/consulta.service';
import { ConsultaSecopIIService } from 'src/app/services/consulta-secop-ii.service';
import { ConsultaEventService } from 'src/app/services/consulta-event.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  consultaSecopII = new EventEmitter<string>(); 

  modalidadContrato:string="";
  consulta:string="";
  fechaInicio:string="";
  fechaFinal:string="";
  departamentoContrato:string="";
  fechaConsulta: string="";
  idUsuario: string="";

  listaConsulta = new Array<ConsultaModel>();

  constructor(private consultaService:ConsultaService,
              private consultaSecopIIService:ConsultaSecopIIService,
              private eventService:ConsultaEventService) { }

  ngOnInit(): void {



  }
  consultar(){

    let consulta = new ConsultaModel;
    let stringConsulta:string;

    let fechaActual = new Date();

    consulta.modalidadContrato = this.modalidadContrato;
    consulta.consulta = this.consulta;
    consulta.fechaInicio = this.fechaInicio;
    consulta.fechaFinal = this.fechaFinal;
    consulta.departamentoContrato = this.departamentoContrato;
    consulta.fechaConsulta= (fechaActual).toString();
    consulta.idUsuario="001";

    //Datos para el String consulta
    stringConsulta="modalidad_de_contratacion="
    +this.modalidadContrato.replace(" ","%20")
    //+"&&descripcion_del_proceso="
    //+this.consulta
    //+"&&fecha_de_inicio_del_contrato="
    //+this.fechaInicio
    //+"&&fecha_de_fin_del_contrato="
    //+this.fechaFinal
    +"&&departamento="
    +this.departamentoContrato.replace(" ","%20");
 
 
    //Emite la consulta
    this.eventService.consultaEvent.emit(stringConsulta);


    //registra la consulta en la base de datos
    this.consultaService.registarConsulta(consulta).subscribe(data=>{
      this.listaConsulta.push(consulta);
    })
    



    
  }

}
