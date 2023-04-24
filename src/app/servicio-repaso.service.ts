import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioRepasoService {

  constructor() { }


  //CREACIÓN DEL SERVICIO
  saludaMundo(){
    console.log("¡Hola Mundo!");
  }
}
