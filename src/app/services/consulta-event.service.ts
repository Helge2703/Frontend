import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaEventService {

  consultaEvent = new EventEmitter<string>(); 

  constructor() { }
}
