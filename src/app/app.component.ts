import { Component } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from './ngb-date-fr-parser-formatter';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter },
  ],
})
export class AppComponent {
  title = 'EmpresasApp-DB1';

  static formIsValid(registerForm: FormGroup) {
    Object.keys(registerForm.controls).forEach((field) => {
      const controle = registerForm.controls[field];
      controle.markAsTouched();
    });
  }

  static validAndTouched(registerForm: FormGroup, campo: string, validacao: string) {
    let valid = false;

    if (validacao !== '') {
      valid = registerForm.get(campo).hasError(validacao);
    } else {
      valid = registerForm.get(campo).errors != null;
    }

    return valid && registerForm.get(campo).touched;
  }

  static saveDefault(registerForm: FormGroup, obj: any, saveService) {
    if (registerForm.valid) {

      saveService(obj).subscribe((resposta) => {
        location.reload();
      });
    } else {
       this.formIsValid(registerForm);
    }
  }
}
