import { Component } from '@angular/core';
import { ServicioRepasoService } from '../servicio-repaso.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {

  constructor(private miServicio:ServicioRepasoService){

  }

  lanzaHolaMundo(){
    this.miServicio.saludaMundo();
  }
}
