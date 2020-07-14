import { Empresa } from 'src/app/_models/Empresa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  empresasUrl = 'http://localhost:5000/api/empresas';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Empresa[]>(this.empresasUrl);
  }

  salvar(empresa: Empresa, success: any, fail: any) {
    return this.http.post(this.empresasUrl, empresa).subscribe(
      (resposta) => {
        success(resposta);
      },
      (ex) => {
        fail(ex);
      }
    );
  }

  excluir(empresa: Empresa) {
    return this.http.delete(this.empresasUrl + '/' + empresa.id);
  }
}
