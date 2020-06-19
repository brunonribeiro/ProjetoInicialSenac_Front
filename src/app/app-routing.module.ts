import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { CargosComponent } from './cargos/cargos.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'empresas', component: EmpresasComponent},
  { path: 'cargos', component: CargosComponent},
  { path: 'funcionarios', component: FuncionariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
