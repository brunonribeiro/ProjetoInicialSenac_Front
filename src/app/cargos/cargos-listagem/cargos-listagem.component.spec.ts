import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargosListagemComponent } from './cargos-listagem.component';

import { AppCommonTestModule } from 'src/app/common/common-test.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CargoService } from '../cargo.service';
import { Cargo } from 'src/app/_models/Cargo';
import { of } from 'rxjs';

describe('CargosListagemComponent', () => {
  let component: CargosListagemComponent;
  let fixture: ComponentFixture<CargosListagemComponent>;

  let cargoService: CargoService;
  const cargos = new Array<Cargo>();
  const cargoExclusao = new Cargo();

  function preencherCargos() {
    let cargo = new Cargo();
    cargo.id = 1;
    cargo.descricao = 'Teste 1';
    cargos.push(cargo);

    cargo = new Cargo();
    cargo.id = 2;
    cargo.descricao = 'Teste 2';
    cargos.push(cargo);

    cargoExclusao.id = 3;
    cargoExclusao.descricao = 'Teste 3';
    cargos.push(cargoExclusao);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargosListagemComponent],
      imports: [AppCommonTestModule, ModalModule.forRoot()],
      providers: [CargoService]
    }).compileComponents();
  });

  beforeEach(() => {
    preencherCargos();
    fixture = TestBed.createComponent(CargosListagemComponent);
    component = fixture.componentInstance;

    cargoService = TestBed.inject(CargoService);
    spyOn(cargoService, 'listar').and.returnValue(of(cargos));
    spyOn(cargoService, 'excluir').and.returnValue(of(true));

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
    expect(component.cargos.length).toEqual(cargos.length);
  });

  it('deve excluir o cargo', () => {
    component.excluirRegistro(cargoExclusao);
    expect(cargoService.excluir).toHaveBeenCalled();
    expect(window.location.reload).toHaveBeenCalled();
  });
});
