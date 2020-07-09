import { AppCommonTestModule } from './../../common/common-test.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosEmpresaComponent } from './funcionarios-empresa.component';
import { InputControlErrorComponent } from 'src/app/input-control-error/input-control-error.component';
import { ActivatedRoute } from '@angular/router';

describe('FuncionariosEmpresaComponent', () => {
  let component: FuncionariosEmpresaComponent;
  let fixture: ComponentFixture<FuncionariosEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionariosEmpresaComponent, InputControlErrorComponent ],
      imports: [AppCommonTestModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: 1 } }
          },
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });
});
