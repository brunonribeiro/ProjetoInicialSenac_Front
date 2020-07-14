import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
import { FuncionarioService } from './../funcionario.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Funcionario } from 'src/app/_models/Funcionario';
@Component({
  selector: 'app-funcionarios-listagem',
  templateUrl: './funcionarios-listagem.component.html',
  styleUrls: ['./funcionarios-listagem.component.css'],
})
export class FuncionariosListagemComponent implements OnInit {
  funcionarios: Array<Funcionario>;
  funcionarioExcluir: Funcionario;
  modalRef: BsModalRef;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onEditClick = new EventEmitter<any>();

  constructor(
    private funcionarioService: FuncionarioService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.funcionarioService
      .listar()
      .subscribe((dados) => (this.funcionarios = dados));
  }

  alterar(funcionario: Funcionario) {
    this.onEditClick.emit(funcionario);
  }

  openModal(template: TemplateRef<any>, funcionario: any) {
    this.modalRef = this.modalService.show(template);
    this.funcionarioExcluir = funcionario;
  }

  excluirRegistro(funcionario: Funcionario) {
    this.funcionarioService.excluir(funcionario).subscribe((resposta) => {
      location.reload();
    });
  }

  abrirEmpresa(funcionario: Funcionario) {
    location.href = `/funcionarios/${funcionario.id}/empresa`;
  }

  abrirCargo(funcionario: Funcionario) {
    location.href = `/funcionarios/${funcionario.id}/cargo`;
  }
}
