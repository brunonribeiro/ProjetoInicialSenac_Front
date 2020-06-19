import { EmpresaService } from '../empresa.service';
import { Validacoes } from '../../validacoes';
import { Component, OnInit } from '@angular/core';
import {  FormGroup,  Validators,  FormBuilder} from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-empresas-formulario',
  templateUrl: './empresas-formulario.component.html',
  styleUrls: ['./empresas-formulario.component.css'],
})
export class EmpresasFormularioComponent implements OnInit {
  constructor(
    private empresaService: EmpresaService,
    private fb: FormBuilder
  ) {}

  empresa: any;
  registerForm: FormGroup;
  dateToString = (date) => `${date.day}/${date.month}/${date.year}`;

  ngOnInit() {
    this.empresa = {};
    this.validation();
  }

  validation() {
    this.registerForm = this.fb.group({
      nome: ['', [Validators.required]],
      cnpj: ['', [Validators.required, Validacoes.ValidarCnpj]],
      dataFundacao: [],
    });
  }

  criar() {
    if (this.registerForm.valid) {
      this.empresa.dataFundacao = this.dateToString(this.empresa.dataFundacao);

      this.empresaService.criar(this.empresa).subscribe((resposta) => {
        location.reload();
      });
    } else {
        AppComponent.formIsValid(this.registerForm);
    }
  }

  carregarEmpresa({ ...obj }) {
    obj.dataFundacao = this.toDate(obj.dataFundacao);
    this.empresa = obj;
  }

  toDate(myStringDate: string) {
    const dateParts = myStringDate.split('/');
    const result = {
      day: Number(dateParts[0]),
      month: Number(dateParts[1]),
      year: Number(dateParts[2]),
    };
    return result;
  }

  verificaValidTouched(campo: string, validacao: string) {
    return AppComponent.validAndTouched(this.registerForm, campo, validacao);
  }
}
