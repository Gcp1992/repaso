import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventoComponent } from './evento/evento.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ServicioComponent } from './servicio/servicio.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { RoutingParametroComponent } from './routing-parametro/routing-parametro.component';
import { DestinoParametroComponent } from './destino-parametro/destino-parametro.component';
import { RoutingConParametrosComponent } from './routing-con-parametros/routing-con-parametros.component';
import { DestinoParametrosComponent } from './destino-parametros/destino-parametros.component';

const routes: Routes = [
  {path:'componenteRouting', component:InterpolacionComponent},
  {path:'componenteOneWayBinding', component:OneWayBindingComponent},
  {path:'componenteEvento', component:EventoComponent},
  {path:'componenteTwoWayBinding',component:TwoWayBindingComponent},
  {path:'componenteServicio', component:ServicioComponent},
  {path:'componenteDirectivas', component:DirectivasComponent},
  {path:'componenteRoutingParametro',component:RoutingParametroComponent},
  {path:'componenteDestinoParametro/:nombre',component:DestinoParametroComponent},
  {path:'componenteRoutingParametros',component:RoutingConParametrosComponent},
  {path:'componenteDestinoParametros',component:DestinoParametrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
