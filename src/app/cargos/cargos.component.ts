import { Component, OnInit, ViewChild } from '@angular/core';
import { CargosFormularioComponent } from './cargos-formulario/cargos-formulario.component';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html'
})
export class CargosComponent implements OnInit {
  @ViewChild(CargosFormularioComponent)  cargoForm: CargosFormularioComponent;

  constructor() { }

  ngOnInit() {
  }

  editClick(cargo: { [x: string]: any; }) {
    this.cargoForm.carregarCargo(cargo);
  }
}
