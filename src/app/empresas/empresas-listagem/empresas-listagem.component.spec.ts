import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpresasListagemComponent } from './empresas-listagem.component';

import { AppCommonTestModule } from 'src/app/common/common-test.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { EmpresaService } from './../empresa.service';
import { Empresa } from 'src/app/_models/Empresa';
import { of } from 'rxjs';

describe('EmpresasListagemComponent', () => {
  let component: EmpresasListagemComponent;
  let fixture: ComponentFixture<EmpresasListagemComponent>;

  let empresaService: EmpresaService;
  const empresas = new Array<Empresa>();
  const empresaExclusao = new Empresa();

  function preencherEmpresas() {
    let empresa = new Empresa();
    empresa.id = 1;
    empresa.nome = 'Teste 1';
    empresa.cnpj = '12345678901230';
    empresas.push(empresa);

    empresa = new Empresa();
    empresa.id = 2;
    empresa.nome = 'Teste 2';
    empresa.cnpj = '81263541000104';
    empresas.push(empresa);

    empresaExclusao.id = 3;
    empresaExclusao.nome = 'Teste 3';
    empresaExclusao.cnpj = '53912542000105';
    empresas.push(empresaExclusao);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresasListagemComponent],
      imports: [AppCommonTestModule, ModalModule.forRoot()],
      providers: [EmpresaService],
    }).compileComponents();
  });

  beforeEach(() => {
    preencherEmpresas();
    fixture = TestBed.createComponent(EmpresasListagemComponent);
    component = fixture.componentInstance;

    empresaService = TestBed.inject(EmpresaService);
    spyOn(empresaService, 'listar').and.returnValue(of(empresas));
    spyOn(empresaService, 'excluir').and.returnValue(of(true));

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
    expect(component.empresas.length).toEqual(empresas.length);
  });

  it('deve excluir o empresa', () => {
    component.excluirRegistro(empresaExclusao);
    expect(empresaService.excluir).toHaveBeenCalled();
    expect(window.location.reload).toHaveBeenCalled();
  });
});
