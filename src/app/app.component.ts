import { Component, ViewChild } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from './ngb-date-fr-parser-formatter';
import { EmpresasCadastroComponent } from './empresas/empresas-cadastro/empresas-cadastro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter },
  ],
})
export class AppComponent {
  empresa: any;
  title = 'EmpresasApp-DB1';
  @ViewChild(EmpresasCadastroComponent) empresaCadastro: EmpresasCadastroComponent;


  editClick(empresa) {
    this.empresaCadastro.carregarEmpresa(empresa);
  }
}
