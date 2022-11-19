import { Component, OnInit } from '@angular/core';
import { ConsultaSecopII } from 'src/app/model/consulta-secop-ii';
import { ConsultaEventService } from 'src/app/services/consulta-event.service';
import { ConsultaSecopIIService } from 'src/app/services/consulta-secop-ii.service';import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  
  public consulta:string="";

  id_contrato: string;
  referencia_del_contrato: string;
  valor_del_contrato: number;
  departamento: string;
  urlproceso: string;



  listadoConsulta = new Array<ConsultaSecopII>();

  constructor(private consultaService : ConsultaSecopIIService,
              private eventService:ConsultaEventService) {}

  ngOnInit(): void {
    


    this.eventService.consultaEvent.subscribe(consultaString =>{  
      this.consulta = consultaString 

    })
    
      this.consultaService.consultaPersonalizada(this.consulta).subscribe(data =>{  
        this.listadoConsulta = Object.values(data);
        console.log(this.listadoConsulta) 
      })
  }

  mostarListado() {
    let resultado = new ConsultaSecopII();

    resultado.id_contrato = this.id_contrato;
    resultado.referencia_del_contrato= this.referencia_del_contrato;
    resultado.valor_del_contrato= this.valor_del_contrato;
    resultado.departamento= this.departamento;
    resultado.urlproceso= this.urlproceso;

    this.listadoConsulta.push(resultado);
    console.log(this.listadoConsulta)
  }
}
