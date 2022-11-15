import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';


const routes: Routes = [
  {path : "login",component:LoginComponent},
  {path : "registro",component:RegistroComponent},
  {path : "",component:TarjetaComponent},
  {path : "consulta",component:ConsultaComponent},
  {path : "dashboard", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
