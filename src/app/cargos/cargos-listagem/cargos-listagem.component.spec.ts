import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargosListagemComponent } from './cargos-listagem.component';

import { AppCommonTestModule } from 'src/app/common/common-test.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CargoService } from '../cargo.service';

describe('CargosListagemComponent', () => {
  let component: CargosListagemComponent;
  let fixture: ComponentFixture<CargosListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CargosListagemComponent ],
      imports: [ AppCommonTestModule, ModalModule.forRoot()],
      providers: [CargoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });
});
