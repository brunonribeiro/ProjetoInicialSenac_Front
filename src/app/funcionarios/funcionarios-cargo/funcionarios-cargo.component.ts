import { CargoService } from './../../cargos/cargo.service';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { Subscription } from 'rxjs';
import { Funcionario } from 'src/app/_models/Funcionario';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-funcionarios-cargo',
  templateUrl: './funcionarios-cargo.component.html',
  styleUrls: ['./funcionarios-cargo.component.css'],
})
export class FuncionariosCargoComponent implements OnInit {
  routeSub: Subscription;
  cargos: Array<any>;
  funcionario: Funcionario;
  registerForm: FormGroup;

  constructor(
    private cargoService: CargoService,
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.funcionario = {} as Funcionario;
    this.routeSub = this.route.params.subscribe((params) => {
      this.loadFuncionario(params.id);
    });

    this.cargoService.listar().subscribe((dados) => {
      this.cargos = dados;
    });

    this.validation();
  }

  validation() {
    this.registerForm = this.fb.group({
      nome: [],
      cargoId: ['', [Validators.required]]
    });
  }

  vincular() {
    if (this.registerForm.valid) {
      this.funcionarioService
        .atribuirCargo(this.funcionario)
        .subscribe((result) => {
          this.voltar();
        });
    } else {
      AppComponent.formIsValid(this.registerForm);
    }
  }

  voltar(){
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
