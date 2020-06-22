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
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validacoes.ValidaCpf]],
      dataContratacao: [],
    });
  }

  criar() {
    if (this.registerForm.valid) {
      if (this.funcionario.dataContratacao !== undefined) {
        this.funcionario.dataContratacao = AppComponent.dateToString(
          this.funcionario.dataContratacao
        );
      }

      this.funcionarioService.salvar(this.funcionario).subscribe((resposta) => {
        location.reload();
      });
    } else {
      AppComponent.formIsValid(this.registerForm);
    }
  }

  carregarFuncionario({ ...obj }) {
    obj.dataContratacao = AppComponent.toDate(obj.dataContratacao);
    this.funcionario = obj;
  }

  verificaValidTouched(campo: string, validacao: string) {
    return AppComponent.validAndTouched(this.registerForm, campo, validacao);
  }
}
