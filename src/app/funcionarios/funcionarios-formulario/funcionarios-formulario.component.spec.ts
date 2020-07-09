import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCommonTestModule } from 'src/app/common/common-test.module';
import { InputControlErrorComponent } from 'src/app/input-control-error/input-control-error.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { FuncionariosFormularioComponent } from './funcionarios-formulario.component';

describe('FuncionariosFormularioComponent', () => {
  let component: FuncionariosFormularioComponent;
  let fixture: ComponentFixture<FuncionariosFormularioComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
