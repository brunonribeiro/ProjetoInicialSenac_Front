import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CargoService {
  cargosUrl = 'http://localhost:5000/api/cargos';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(this.cargosUrl);
  }

  salvar(cargo: any, success: any, fail: any) {
    this.http.post(this.cargosUrl, cargo).subscribe(
      (resposta) => {
        success(resposta);
      },
      (ex) => {
        fail(ex);
      }
    );
  }

  excluir(cargo: any) {
    return this.http.delete(this.cargosUrl + '/' + cargo.id);
  }
}
