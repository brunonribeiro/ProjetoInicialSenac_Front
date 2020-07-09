import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosFormularioComponent } from './cargos-formulario.component';
import { InputControlErrorComponent } from './../../input-control-error/input-control-error.component';

import { AppCommonTestModule } from './../../common/common-test.module';
import { CargoService } from '../cargo.service';

describe('CargosFormularioComponent', () => {
  let component: CargosFormularioComponent;
  let fixture: ComponentFixture<CargosFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CargosFormularioComponent, InputControlErrorComponent ],
      imports: [AppCommonTestModule],
      providers: [CargoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });
});
