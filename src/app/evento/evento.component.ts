import { Component } from '@angular/core';
import { ServicioRepasoService } from '../servicio-repaso.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {

  //Inyección del servicio en el constructor:
  constructor(){
  }

  eventoAlert(){
    alert ("Evento asociado a un botón");
  }


}
