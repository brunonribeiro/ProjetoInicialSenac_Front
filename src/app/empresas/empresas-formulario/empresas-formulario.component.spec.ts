import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasFormularioComponent } from './empresas-formulario.component';
import { EmpresaService } from '../empresa.service';
import { AppCommonTestModule } from 'src/app/common/common-test.module';
import { InputControlErrorComponent } from 'src/app/input-control-error/input-control-error.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

describe('EmpresasFormularioComponent', () => {
  let component: EmpresasFormularioComponent;
  let fixture: ComponentFixture<EmpresasFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasFormularioComponent, InputControlErrorComponent ],
      imports: [AppCommonTestModule, NgbDatepickerModule],
      providers: [EmpresaService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });
});
