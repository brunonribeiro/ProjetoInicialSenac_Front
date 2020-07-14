import { EmpresaService } from './../empresa.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasFormularioComponent } from './empresas-formulario.component';
import { AppCommonTestModule } from 'src/app/common/common-test.module';
import { InputControlErrorComponent } from 'src/app/input-control-error/input-control-error.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { Empresa } from 'src/app/_models/Empresa';

describe('EmpresasFormularioComponent', () => {
  let component: EmpresasFormularioComponent;
  let fixture: ComponentFixture<EmpresasFormularioComponent>;

  let empresaService: EmpresaService;
  const empresa = new Empresa();

  function setEmpresaValida() {
    empresa.nome = 'Teste';
    empresa.cnpj = '12.345.678/9012-30';
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresasFormularioComponent, InputControlErrorComponent],
      imports: [AppCommonTestModule, NgbDatepickerModule],
      providers: [EmpresaService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasFormularioComponent);
    component = fixture.componentInstance;
    setEmpresaValida();

    empresaService = TestBed.inject(EmpresaService);
    spyOn(empresaService, 'salvar');

    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve salvar uma empresa', () => {
    setupAddEmpresa();

    component.criar();
    expect(component.registerForm.valid).toBeTruthy();
    expect(empresaService.salvar).toHaveBeenCalled();
  });

  it('não deve salvar uma empresa sem nome', () => {
    empresa.nome = '';
    setupAddEmpresa();

    component.criar();
    expect(component.registerForm.valid).toBeFalsy();
    expect(empresaService.salvar).not.toHaveBeenCalled();
  });

  it('não deve salvar uma empresa sem cnpj', () => {
    empresa.cnpj = '';
    setupAddEmpresa();

    component.criar();
    expect(component.registerForm.valid).toBeFalsy();
    expect(empresaService.salvar).not.toHaveBeenCalled();
  });

  
  it('não deve salvar uma empresa com cnpj invalido', () => {
    empresa.cnpj = '16.547.984/9849-84';
    setupAddEmpresa();

    component.criar();
    expect(component.registerForm.valid).toBeFalsy();
    expect(empresaService.salvar).not.toHaveBeenCalled();
  });

  it('deve alterar uma empresa', () => {
    empresa.id = 1;

    component.carregarEmpresa(empresa);
    component.criar();

    expect(component.registerForm.valid).toBeTruthy();
    expect(empresaService.salvar).toHaveBeenCalled();
  });

  function setupAddEmpresa() {
    component.registerForm.patchValue(empresa);
    fixture.detectChanges();
  }
});
