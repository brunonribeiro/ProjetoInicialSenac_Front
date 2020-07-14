import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Cargo } from '../_models/Cargo';

@Injectable({
  providedIn: 'root',
})
export class CargoService {
  cargosUrl = 'http://localhost:5000/api/cargos';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Cargo[]>(this.cargosUrl);
  }

  salvar(cargo: Cargo, success: any, fail: any) {
    this.http.post(this.cargosUrl, cargo).subscribe(
      (resposta) => {
        success(resposta);
      },
      (ex) => {
        fail(ex);
      }
    );
  }

  excluir(cargo: Cargo) {
    return this.http.delete(this.cargosUrl + '/' + cargo.id);
  }
}
