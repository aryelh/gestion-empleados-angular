import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpleadoComponent } from './components/actualizar-empleado/actualizar-empleado.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';

const routes: Routes = [
  { path :'empleados', component:ListaEmpleadosComponent},
  { path : '', redirectTo:'empleados',pathMatch:'full'},
  { path : 'registrar-empleado', component : RegistrarEmpleadoComponent},
  { path : 'actualizar-empleado/:id', component : ActualizarEmpleadoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
