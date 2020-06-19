import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CargoService {
  cargosUrl = 'http://localhost:5000/api/cargos';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(this.cargosUrl);
  }

  salvar(cargo: any) {
    return this.http.post(this.cargosUrl, cargo);
  }

  excluir(cargo: any){
    return this.http.delete(this.cargosUrl + '/' + cargo.id);
  }
}
