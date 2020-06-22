import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { CargosComponent } from './cargos/cargos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionariosEmpresaComponent } from './funcionarios/funcionarios-empresa/funcionarios-empresa.component';
import { FuncionariosCargoComponent } from './funcionarios/funcionarios-cargo/funcionarios-cargo.component';


const routes: Routes = [
  { path: 'empresas', component: EmpresasComponent},
  { path: 'cargos', component: CargosComponent},
  { path: 'funcionarios', component: FuncionariosComponent},
  { path: 'funcionarios/:id/empresa', component: FuncionariosEmpresaComponent},
  { path: 'funcionarios/:id/cargo', component: FuncionariosCargoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
