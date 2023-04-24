import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destino-parametro',
  templateUrl: './destino-parametro.component.html',
  styleUrls: ['./destino-parametro.component.css']
})
export class DestinoParametroComponent implements OnInit {

  nombre:string="";

  constructor(public activatedRoute:ActivatedRoute, private router:Router){

  }
  ngOnInit(): void {
    this.nombre=this.activatedRoute.snapshot.params["nombre"];
    console.log(this.nombre);
  }


}
