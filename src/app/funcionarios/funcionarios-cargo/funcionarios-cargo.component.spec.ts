import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosCargoComponent } from './funcionarios-cargo.component';
import { InputControlErrorComponent } from 'src/app/input-control-error/input-control-error.component';
import { AppCommonTestModule } from 'src/app/common/common-test.module';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from 'src/app/_models/Funcionario';
import { of } from 'rxjs';

describe('FuncionariosCargoComponent', () => {
  let component: FuncionariosCargoComponent;
  let fixture: ComponentFixture<FuncionariosCargoComponent>;

  let funcionarioService: FuncionarioService;
  const funcionario = new Funcionario();

  function setCargoFuncionarioValido() {
    funcionario.nome = 'Teste';
    funcionario.cargoId = 1;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionariosCargoComponent, InputControlErrorComponent ],
      imports: [AppCommonTestModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: 1 } }
          },
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosCargoComponent);
    component = fixture.componentInstance;
    setCargoFuncionarioValido();

    funcionarioService = TestBed.inject(FuncionarioService);
    spyOn(funcionarioService, 'atribuirCargo');
    spyOn(funcionarioService, 'buscarPorId').and.returnValue(of(funcionario));

    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  
  it('deve vincular uma cargo ao funcionario', () => {
    setupAddFuncionario();

    component.vincular();
    expect(component.registerForm.valid).toBeTruthy();
    expect(funcionarioService.atribuirCargo).toHaveBeenCalled();
  });

  it('não deve vincular uma cargo inválida ao funcionario', () => {
    funcionario.cargoId = null;
    setupAddFuncionario();

    component.vincular();
    expect(component.registerForm.valid).toBeFalsy();
    expect(funcionarioService.atribuirCargo).not.toHaveBeenCalled();
  });

  it('deve carregar o funcionario ao entrar no componente', () => {
    expect(funcionarioService.buscarPorId).toHaveBeenCalled();
  });

  function setupAddFuncionario() {
    component.registerForm.patchValue(funcionario);
    fixture.detectChanges();
  }
});
