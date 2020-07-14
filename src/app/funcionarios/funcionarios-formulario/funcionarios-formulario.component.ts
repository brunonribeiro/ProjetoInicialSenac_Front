import { FuncionarioService } from '../funcionario.service';
import { Validacoes } from '../../validacoes';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-funcionarios-formulario',
  templateUrl: './funcionarios-formulario.component.html',
  styleUrls: ['./funcionarios-formulario.component.css'],
})
export class FuncionariosFormularioComponent implements OnInit {
  constructor(
    private funcionarioService: FuncionarioService,
    private fb: FormBuilder
  ) {}

  funcionario: any;
  registerForm: FormGroup;

  ngOnInit() {
    this.funcionario = {};
    this.validation();
  }

  validation() {
    this.registerForm = this.fb.group({
      nome: ['', { validators: Validators.required }],
      cpf: ['', { validators: [Validators.required, Validacoes.ValidaCpf] }],
      dataContratacao: [],
    });
  }

  criar() {
    if (this.registerForm.valid) {
      this.funcionario = Object.assign({id: this.funcionario.id}, this.registerForm.value);

      if (this.funcionario.dataContratacao) {
        this.funcionario.dataContratacao = AppComponent.dateToString(
          this.funcionario.dataContratacao
        );
      }

      this.funcionarioService.salvar(
        this.funcionario,
        AppComponent.salvoComSucesso,
        AppComponent.erroAoSalvar
      );
    } else {
      AppComponent.formIsValid(this.registerForm);
    }
  }

  carregarFuncionario({ ...obj }) {
    if (obj.dataContratacao) {
      obj.dataContratacao = AppComponent.toDate(obj.dataContratacao);
    }
    this.funcionario = obj;
    this.registerForm.patchValue(obj);
  }

  verificaValidTouched(campo: string, validacao: string) {
    return AppComponent.validAndTouched(this.registerForm, campo, validacao);
  }
}
