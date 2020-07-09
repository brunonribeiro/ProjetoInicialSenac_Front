import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosCargoComponent } from './funcionarios-cargo.component';
import { InputControlErrorComponent } from 'src/app/input-control-error/input-control-error.component';
import { AppCommonTestModule } from 'src/app/common/common-test.module';
import { ActivatedRoute } from '@angular/router';

describe('FuncionariosCargoComponent', () => {
  let component: FuncionariosCargoComponent;
  let fixture: ComponentFixture<FuncionariosCargoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionariosCargoComponent, InputControlErrorComponent ],
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
    fixture = TestBed.createComponent(FuncionariosCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });
});
