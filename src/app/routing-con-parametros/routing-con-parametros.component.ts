import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-con-parametros',
  templateUrl: './routing-con-parametros.component.html',
  styleUrls: ['./routing-con-parametros.component.css']
})
export class RoutingConParametrosComponent {

  id:number=0;
  nombre:string="";

  constructor(private router:Router){

  }

  redireccionParametros(){
    this.router.navigate(['componenteDestinoParametros'], {queryParams: {mandarId:this.id, mandarNombre:this.nombre}})
  }
}
