import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaService} from './empresas/empresa.service';
import { EmpresasListagemComponent } from './empresas/empresas-listagem/empresas-listagem.component';
import { EmpresasCadastroComponent } from './empresas/empresas-cadastro/empresas-cadastro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputControlErrorComponent } from './input-control-error/input-control-error.component';

@NgModule({
   declarations: [
      AppComponent,
      EmpresasListagemComponent,
      EmpresasCadastroComponent,
      InputControlErrorComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      NgbModule,
      ModalModule.forRoot(),
      NgxMaskModule.forRoot()
   ],
   providers: [
      EmpresaService
   ],
   bootstrap: [
      AppComponent,
   ]
})
export class AppModule { }
