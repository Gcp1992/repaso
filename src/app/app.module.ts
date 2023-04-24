import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventoComponent } from './evento/evento.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { ServicioRepasoService } from './servicio-repaso.service';
import { ServicioComponent } from './servicio/servicio.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { RoutingParametroComponent } from './routing-parametro/routing-parametro.component';
import { DestinoParametroComponent } from './destino-parametro/destino-parametro.component';
import { RoutingConParametrosComponent } from './routing-con-parametros/routing-con-parametros.component';
import { DestinoParametrosComponent } from './destino-parametros/destino-parametros.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    OneWayBindingComponent,
    EventoComponent,
    TwoWayBindingComponent,
    ServicioComponent,
    DirectivasComponent,
    RoutingParametroComponent,
    DestinoParametroComponent,
    RoutingConParametrosComponent,
    DestinoParametrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    //Registramos el servicio en la aplicación
    ServicioRepasoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
