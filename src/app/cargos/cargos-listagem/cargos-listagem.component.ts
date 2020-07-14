import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { CargoService } from './../cargo.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cargo } from 'src/app/_models/Cargo';
@Component({
  selector: 'app-cargos-listagem',
  templateUrl: './cargos-listagem.component.html',
  styleUrls: ['./cargos-listagem.component.css']
})
export class CargosListagemComponent implements OnInit {
  cargos: Array<Cargo>;
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

  alterar(cargo: Cargo){
    this.onEditClick.emit(cargo);
  }

  openModal(template: TemplateRef<any>, cargo: Cargo){
      this.modalRef = this.modalService.show(template);
      this.cargoExcluir = cargo;
  }

  excluirRegistro(cargo: Cargo){
    this.cargoService.excluir(cargo).subscribe(() => {
      location.reload();
    });
  }

}
