import { FuncionarioService } from './../funcionario.service';
import { EmpresaService } from './../../empresas/empresa.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/_models/Funcionario';
import { AppComponent } from 'src/app/app.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-funcionarios-empresa',
  templateUrl: './funcionarios-empresa.component.html',
  styleUrls: ['./funcionarios-empresa.component.css'],
})
export class FuncionariosEmpresaComponent implements OnInit {
  routeSub: Subscription;
  empresas: Array<any>;
  funcionario: Funcionario;
  registerForm: FormGroup;

  constructor(
    private empresaService: EmpresaService,
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.funcionario = {} as Funcionario;
    this.routeSub = this.route.params.subscribe((params) => {
      this.loadFuncionario(params.id);
    });

    this.empresaService.listar().subscribe((dados) => {
      this.empresas = dados;
    });

    this.validation();
  }

  validation() {
    this.registerForm = this.fb.group({
      nome: [],
      empresaId: ['', [Validators.required]],
    });
  }

  vincular() {
    if (this.registerForm.valid) {
      this.funcionarioService.vincularEmpresa(
        this.funcionario,
        this.voltar,
        AppComponent.erroAoSalvar
      );
    } else {
      AppComponent.formIsValid(this.registerForm);
    }
  }

  voltar() {
    location.href = '/funcionarios';
  }

  loadFuncionario(funcionarioId: number) {
    this.funcionarioService.buscarPorId(funcionarioId).subscribe((result) => {
      this.funcionario = result;
    });
  }

  verificaValidTouched(campo: string, validacao: string) {
    return AppComponent.validAndTouched(this.registerForm, campo, validacao);
  }
}
