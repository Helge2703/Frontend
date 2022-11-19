import { Component, OnInit } from '@angular/core';
import { ConsultaModel } from 'src/app/model/consulta-model';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  listadoConsulta = new Array<ConsultaModel>();

  constructor(private consultaService:ConsultaService) { }

  ngOnInit(): void {
    this.consultaService.obtenerConsultas().subscribe((consultas)=>{
      this.listadoConsulta = Object.values(consultas);
    })
  }

}
