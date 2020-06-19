import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { CargoService } from './../cargo.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-cargos-listagem',
  templateUrl: './cargos-listagem.component.html',
  styleUrls: ['./cargos-listagem.component.css']
})
export class CargosListagemComponent implements OnInit {
  cargos: Array<any>;
  cargoExcluir: any;
  modalRef: BsModalRef;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onEditClick = new EventEmitter<any>();


  constructor(
    private cargoService: CargoService,
    private modalService: BsModalService
    ) {}

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.cargoService.listar().subscribe(dados => this.cargos = dados);
  }

  alterar(cargo: any){
    this.onEditClick.emit(cargo);
  }

  openModal(template: TemplateRef<any>, cargo: any){
      this.modalRef = this.modalService.show(template);
      this.cargoExcluir = cargo;
  }

  excluirRegistro(cargo: any){
    this.cargoService.excluir(cargo).subscribe((resposta) => {
      location.reload();
    });
  }

}
