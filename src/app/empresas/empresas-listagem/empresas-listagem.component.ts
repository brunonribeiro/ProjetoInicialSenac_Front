import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresas-listagem',
  templateUrl: './empresas-listagem.component.html',
  styleUrls: ['./empresas-listagem.component.css'],
})
export class EmpresasListagemComponent implements OnInit {
  empresas: Array<any>;

  constructor(private empresaService: EmpresaService) {}

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.empresaService.listar().subscribe(dados => this.empresas = dados);
  }

}
