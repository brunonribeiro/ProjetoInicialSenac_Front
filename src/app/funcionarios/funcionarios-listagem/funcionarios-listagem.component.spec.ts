import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionariosListagemComponent } from './funcionarios-listagem.component';

import { AppCommonTestModule } from 'src/app/common/common-test.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { FuncionarioService } from '../funcionario.service';

describe('FuncionariosListagemComponent', () => {
  let component: FuncionariosListagemComponent;
  let fixture: ComponentFixture<FuncionariosListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionariosListagemComponent ],
      imports: [ AppCommonTestModule, ModalModule.forRoot()],
      providers: [FuncionarioService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });
});
