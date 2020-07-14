import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosFormularioComponent } from './cargos-formulario.component';
import { InputControlErrorComponent } from './../../input-control-error/input-control-error.component';

import { AppCommonTestModule } from './../../common/common-test.module';
import { CargoService } from '../cargo.service';
import { Cargo } from 'src/app/_models/Cargo';

describe('CargosFormularioComponent', () => {
  let component: CargosFormularioComponent;
  let fixture: ComponentFixture<CargosFormularioComponent>;

  let cargoService: CargoService;
  const cargo = new Cargo();

  function setCargoValida() {
    cargo.descricao = 'Teste';
  }

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
    setCargoValida();

    cargoService = TestBed.inject(CargoService);
    spyOn(cargoService, 'salvar');

    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve salvar um cargo', () => {
    setupAddCargo();

    component.criar();
    expect(component.registerForm.valid).toBeTruthy();
    expect(cargoService.salvar).toHaveBeenCalled();
  });

  it('não deve salvar um cargo sem nome', () => {
    cargo.descricao = '';
    setupAddCargo();

    component.criar();
    expect(component.registerForm.valid).toBeFalsy();
    expect(cargoService.salvar).not.toHaveBeenCalled();
  });

  it('deve alterar uma cargo', () => {
    cargo.id = 1;

    component.carregarCargo(cargo);
    component.criar();

    expect(component.registerForm.valid).toBeTruthy();
    expect(cargoService.salvar).toHaveBeenCalled();
  });

  function setupAddCargo() {
    component.registerForm.patchValue(cargo);
    fixture.detectChanges();
  }
});
