import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionariosListagemComponent } from './funcionarios-listagem.component';

import { AppCommonTestModule } from 'src/app/common/common-test.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from 'src/app/_models/Funcionario';
import { of } from 'rxjs';
import { EventEmitter } from 'events';

describe('FuncionariosListagemComponent', () => {
  let component: FuncionariosListagemComponent;
  let fixture: ComponentFixture<FuncionariosListagemComponent>;

  let funcionarioService: FuncionarioService;
  const funcionarios = new Array<Funcionario>();
  const funcionarioExclusao = new Funcionario();
  const onEditClick = new EventEmitter();

  function preencherFuncionarios() {
    let funcionario = new Funcionario();
    funcionario.id = 1;
    funcionario.nome = 'Teste 1';
    funcionario.cpf = '12345678909';
    funcionarios.push(funcionario);

    funcionario = new Funcionario();
    funcionario.id = 2;
    funcionario.nome = 'Teste 2';
    funcionario.cpf = '77900261354';
    funcionarios.push(funcionario);

    funcionarioExclusao.id = 3;
    funcionarioExclusao.nome = 'Teste 3';
    funcionarioExclusao.cpf = '32868611621';
    funcionarios.push(funcionarioExclusao);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariosListagemComponent],
      imports: [AppCommonTestModule, ModalModule.forRoot()],
      providers: [FuncionarioService],
    }).compileComponents();
  });

  beforeEach(() => {
    preencherFuncionarios();
    fixture = TestBed.createComponent(FuncionariosListagemComponent);
    component = fixture.componentInstance;

    funcionarioService = TestBed.inject(FuncionarioService);
    spyOn(funcionarioService, 'listar').and.returnValue(of(funcionarios));
    spyOn(funcionarioService, 'excluir').and.returnValue(of(true));

    delete window.location;
    window.location = Object.create(window);
    window.location.reload = () => {};
    spyOn(window.location, 'reload');

    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve listar ao entrar na tela', () => {
    expect(component.funcionarios.length).toEqual(funcionarios.length);
  });

  it('deve excluir o funcionario', () => {
    component.excluirRegistro(funcionarioExclusao);
    expect(funcionarioService.excluir).toHaveBeenCalled();
    expect(window.location.reload).toHaveBeenCalled();
  });
});
