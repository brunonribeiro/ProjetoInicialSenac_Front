import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InputControlErrorComponent } from './input-control-error/input-control-error.component';
import { EmpresaService} from './empresas/empresa.service';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresasListagemComponent } from './empresas/empresas-listagem/empresas-listagem.component';
import { EmpresasFormularioComponent } from './empresas/empresas-formulario/empresas-formulario.component';
import { CargoService } from './cargos/cargo.service';
import { CargosComponent } from './cargos/cargos.component';
import { CargosFormularioComponent } from './cargos/cargos-formulario/cargos-formulario.component';
import { CargosListagemComponent } from './cargos/cargos-listagem/cargos-listagem.component';

@NgModule({
   declarations: [
      AppComponent,
      InputControlErrorComponent,
      EmpresasListagemComponent,
      EmpresasComponent,
      EmpresasFormularioComponent,
      CargosComponent,
      CargosFormularioComponent,
      CargosListagemComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      NgbModule,
      ReactiveFormsModule,
      ModalModule.forRoot(),
      NgxMaskModule.forRoot()
   ],
   providers: [
      EmpresaService,
      CargoService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
