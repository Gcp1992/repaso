import { Component } from '@angular/core';
import { DiasDeLaSemana } from '../_modelo/dias_enum';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  mostrarMensaje:boolean = true;

  dias: string[]= Object.values(DiasDeLaSemana).map((v,i,arr)=> v as string);

  opcionSeleccionada: string = 'opcion2';

}
