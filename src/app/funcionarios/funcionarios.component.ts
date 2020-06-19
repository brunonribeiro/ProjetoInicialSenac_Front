import { Component, OnInit, ViewChild } from '@angular/core';
import { FuncionariosFormularioComponent } from './funcionarios-formulario/funcionarios-formulario.component';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html'
})
export class FuncionariosComponent implements OnInit {
  @ViewChild(FuncionariosFormularioComponent)  funcionarioForm: FuncionariosFormularioComponent;

  constructor() {}

  ngOnInit() {  }

  editClick(funcionario: { [x: string]: any; }) {
    this.funcionarioForm.carregarFuncionario(funcionario);
  }

}
