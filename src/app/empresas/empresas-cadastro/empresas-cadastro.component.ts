import { EmpresaService } from '../empresa.service';
import { Component, OnInit, Input } from '@angular/core';
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
        location.reload();
      });
    } else {
      this.verificaValidacoesForm(frm);
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

  verificaValidTouched(campo: { valid: any; touched: any }) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: { valid: any; touched: any }) {
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
