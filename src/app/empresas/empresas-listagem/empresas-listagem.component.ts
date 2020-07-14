import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Empresa } from 'src/app/_models/Empresa';

@Component({
  selector: 'app-empresas-listagem',
  templateUrl: './empresas-listagem.component.html',
  styleUrls: ['./empresas-listagem.component.css'],
})
export class EmpresasListagemComponent implements OnInit {
  empresas: Array<any>;
  empresaExcluir: any;
  modalRef: BsModalRef;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onEditClick = new EventEmitter<any>();


  constructor(
    private empresaService: EmpresaService,
    private modalService: BsModalService
    ) {}

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.empresaService.listar().subscribe(dados => this.empresas = dados);
  }

  alterar(empresa: Empresa){
    this.onEditClick.emit(empresa);
  }

  openModal(template: TemplateRef<any>, empresa: Empresa){
      this.modalRef = this.modalService.show(template);
      this.empresaExcluir = empresa;
  }

  excluirRegistro(empresa: Empresa){
    this.empresaService.excluir(empresa).subscribe((resposta) => {
      location.reload();
    });
  }


}
