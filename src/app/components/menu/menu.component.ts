import { Component, OnInit } from '@angular/core';
import { ConsultaModel } from 'src/app/model/consulta-model';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  titulo : String = "Carga Agil.";


  modalidadContrato:string="";
  consulta:string="";
  fechaInicio:string="";
  fechaFinal:string="";
  departamentoContrato:string="";
  fechaConsulta: string="";
  idUsuario: string="";

  listaConsulta = new Array<ConsultaModel>();

  constructor(private consultaService:ConsultaService) { }

  ngOnInit(): void {
    
  }

  consultar(){

    let consulta = new ConsultaModel;

    let fechaActual = new Date();

    consulta.modalidadContrato = "";
    consulta.consulta = this.consulta;
    consulta.fechaInicio = "";
    consulta.fechaFinal = "";
    consulta.departamentoContrato = "";
    consulta.fechaConsulta= (fechaActual).toString();
    consulta.idUsuario="001";

    this.consultaService.registarConsulta(consulta).subscribe(data=>{
      this.listaConsulta.push(consulta);
    })

  }
}
