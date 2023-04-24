import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destino-parametros',
  templateUrl: './destino-parametros.component.html',
  styleUrls: ['./destino-parametros.component.css']
})
export class DestinoParametrosComponent {
  id:number=0;
  nombre:string="";

  constructor(public activaterouter:ActivatedRoute, private router:Router){
    this.id=this.activaterouter.snapshot.queryParams['mandarId'];
    this.nombre=this.activaterouter.snapshot.queryParams['mandarNombre'];
  }

  redirigir(){
    this.router.navigate(['componenteRoutingParametros']);
  }
}
