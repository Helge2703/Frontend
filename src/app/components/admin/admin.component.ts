import { Component, OnInit } from '@angular/core';
import { PersonaModel } from 'src/app/model/persona-model';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  listadoPersonas = new Array<PersonaModel>();


  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {
    this.registroService.obtenerPersonas().subscribe((data) => {
      this.listadoPersonas = Object.values(data);
    });
  }

}
