import { Funcionario } from 'src/app/_models/Funcionario';
import { AppCommonTestModule } from './../../common/common-test.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosEmpresaComponent } from './funcionarios-empresa.component';
import { InputControlErrorComponent } from 'src/app/input-control-error/input-control-error.component';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { of } from 'rxjs';

describe('FuncionariosEmpresaComponent', () => {
  let component: FuncionariosEmpresaComponent;
  let fixture: ComponentFixture<FuncionariosEmpresaComponent>;

  let funcionarioService: FuncionarioService;
  const funcionario = new Funcionario();

  function setEmpresaFuncionarioValido() {
    funcionario.nome = 'Teste';
    funcionario.empresaId = 1;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionariosEmpresaComponent, InputControlErrorComponent ],
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
    fixture = TestBed.createComponent(FuncionariosEmpresaComponent);
    component = fixture.componentInstance;
    setEmpresaFuncionarioValido();

    funcionarioService = TestBed.inject(FuncionarioService);
    spyOn(funcionarioService, 'vincularEmpresa');
    spyOn(funcionarioService, 'buscarPorId').and.returnValue(of(funcionario));

    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve vincular uma empresa ao funcionario', () => {
    setupAddFuncionario();

    component.vincular();
    expect(component.registerForm.valid).toBeTruthy();
    expect(funcionarioService.vincularEmpresa).toHaveBeenCalled();
  });

  it('não deve vincular uma empresa inválida ao funcionario', () => {
    funcionario.empresaId = null;
    setupAddFuncionario();

    component.vincular();
    expect(component.registerForm.valid).toBeFalsy();
    expect(funcionarioService.vincularEmpresa).not.toHaveBeenCalled();
  });

  it('deve carregar o funcionario ao entrar no componente', () => {
    expect(funcionarioService.buscarPorId).toHaveBeenCalled();
  });

  function setupAddFuncionario() {
    component.registerForm.patchValue(funcionario);
    fixture.detectChanges();
  }
});
