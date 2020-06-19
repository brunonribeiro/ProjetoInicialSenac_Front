import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-control-error',
  templateUrl: './input-control-error.component.html'
})
export class InputControlErrorComponent implements OnInit {

  @Input() mostrarErro: boolean;
  @Input() msgErro: string;

  constructor() {
  }

  ngOnInit() {
  }
}
