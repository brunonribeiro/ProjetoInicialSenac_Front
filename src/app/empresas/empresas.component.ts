import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpresasFormularioComponent } from './empresas-formulario/empresas-formulario.component';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
})
export class EmpresasComponent implements OnInit {
  @ViewChild(EmpresasFormularioComponent)  empresaForm: EmpresasFormularioComponent;

  constructor() {}

  ngOnInit() {  }

  editClick(empresa: { [x: string]: any; }) {
    this.empresaForm.carregarEmpresa(empresa);
  }
}
