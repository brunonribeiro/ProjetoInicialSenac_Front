import { Funcionario } from 'src/app/_models/Funcionario';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCommonTestModule } from 'src/app/common/common-test.module';
import { InputControlErrorComponent } from 'src/app/input-control-error/input-control-error.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { FuncionariosFormularioComponent } from './funcionarios-formulario.component';
import { FuncionarioService } from '../funcionario.service';

describe('FuncionariosFormularioComponent', () => {
  let component: FuncionariosFormularioComponent;
  let fixture: ComponentFixture<FuncionariosFormularioComponent>;

  let funcionarioService: FuncionarioService;
  const funcionario = new Funcionario();

  function setFuncionarioValido() {
    funcionario.nome = 'Teste';
    funcionario.cpf = '123.456.789-09';
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionariosFormularioComponent, InputControlErrorComponent ],
      imports: [AppCommonTestModule, NgbDatepickerModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosFormularioComponent);
    component = fixture.componentInstance;
    setFuncionarioValido();

    funcionarioService = TestBed.inject(FuncionarioService);
    spyOn(funcionarioService, 'salvar');

    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve salvar um funcionario', () => {
    setupAddFuncionario();

    component.criar();
    expect(component.registerForm.valid).toBeTruthy();
    expect(funcionarioService.salvar).toHaveBeenCalled();
  });

  it('não deve salvar um funcionario sem nome', () => {
    funcionario.nome = '';
    setupAddFuncionario();

    component.criar();
    expect(component.registerForm.valid).toBeFalsy();
    expect(funcionarioService.salvar).not.toHaveBeenCalled();
  });

  it('não deve salvar um funcionario sem cpf', () => {
    funcionario.cpf = '';
    setupAddFuncionario();

    component.criar();
    expect(component.registerForm.valid).toBeFalsy();
    expect(funcionarioService.salvar).not.toHaveBeenCalled();
  });


  it('não deve salvar um funcionario com cpf inválido', () => {
    funcionario.cpf = '197.987.465-98';
    setupAddFuncionario();

    component.criar();
    expect(component.registerForm.valid).toBeFalsy();
    expect(funcionarioService.salvar).not.toHaveBeenCalled();
  });

  it('deve alterar uma funcionario', () => {
    funcionario.id = 1;

    component.carregarFuncionario(funcionario);
    component.criar();

    expect(component.registerForm.valid).toBeTruthy();
    expect(funcionarioService.salvar).toHaveBeenCalled();
  });

  function setupAddFuncionario() {
    component.registerForm.patchValue(funcionario);
    fixture.detectChanges();
  }
});
