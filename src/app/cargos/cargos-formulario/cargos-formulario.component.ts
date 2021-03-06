import { AppComponent } from './../../app.component';
import { CargoService } from './../cargo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cargos-formulario',
  templateUrl: './cargos-formulario.component.html',
  styleUrls: ['./cargos-formulario.component.css'],
})
export class CargosFormularioComponent implements OnInit {
  constructor(private cargoService: CargoService, private fb: FormBuilder) {}

  cargo: any;
  registerForm: FormGroup;

  ngOnInit() {
    this.cargo = {};
    this.validation();
  }

  validation() {
    this.registerForm = this.fb.group({
      descricao: ['', Validators.required],
    });
  }

  criar() {
    if (this.registerForm.valid) {
      this.cargo = Object.assign({id: this.cargo.id}, this.registerForm.value);

      this.cargoService.salvar(
        this.cargo,
        AppComponent.salvoComSucesso,
        AppComponent.erroAoSalvar
      );
    } else {
      AppComponent.formIsValid(this.registerForm);
    }
  }

  carregarCargo({ ...obj }) {
    this.cargo = obj;
    this.registerForm.patchValue(obj);
  }

  verificaValidTouched(campo: string, validacao: string) {
    return AppComponent.validAndTouched(this.registerForm, campo, validacao);
  }
}
