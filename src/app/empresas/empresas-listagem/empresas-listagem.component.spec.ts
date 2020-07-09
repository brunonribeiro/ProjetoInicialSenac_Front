import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpresasListagemComponent } from './empresas-listagem.component';

import { AppCommonTestModule } from 'src/app/common/common-test.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { EmpresaService } from './../empresa.service';

describe('EmpresasListagemComponent', () => {
  let component: EmpresasListagemComponent;
  let fixture: ComponentFixture<EmpresasListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasListagemComponent ],
      imports: [ AppCommonTestModule, ModalModule.forRoot()],
      providers: [EmpresaService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });
});
