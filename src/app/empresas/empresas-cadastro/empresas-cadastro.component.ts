import { EmpresaService } from '../empresa.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-empresas-cadastro',
  templateUrl: './empresas-cadastro.component.html',
  styleUrls: ['./empresas-cadastro.component.css'],
})
export class EmpresasCadastroComponent implements OnInit {
  empresa: any;
  dateToString = (date) => `${date.day}/${date.month}/${date.year}`;

  constructor(private empresaService: EmpresaService) {}

  ngOnInit() {
    this.empresa = {};
  }

  criar(frm: NgForm) {
    if (frm.valid) {
      this.empresa.dataFundacao = this.dateToString(this.empresa.dataFundacao);

      this.empresaService.criar(this.empresa).subscribe((resposta) => {
        frm.reset();
        location.reload();
      });
    } else {
      this.verificaValidacoesForm(frm);
    }
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }

  verificaValidacoesForm(form: NgForm) {
    Object.keys(form.controls).forEach((field) => {
      const controle = form.controls[field];
      controle.markAsTouched();
    });
  }
}
