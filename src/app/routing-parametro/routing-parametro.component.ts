import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-parametro',
  templateUrl: './routing-parametro.component.html',
  styleUrls: ['./routing-parametro.component.css']
})
export class RoutingParametroComponent {

  nombre:string="";

  constructor(private router:Router){

  }



}
