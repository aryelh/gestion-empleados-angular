import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';

const routes: Routes = [
  { path :'empleados', component:ListaEmpleadosComponent},
  { path : '', redirectTo:'empleados',pathMatch:'full'},
  { path : 'registrar-empleado', component : RegistrarEmpleadoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
