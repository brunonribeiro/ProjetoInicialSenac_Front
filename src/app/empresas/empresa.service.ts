import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  empresasUrl = 'http://localhost:5000/api/empresas';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(this.empresasUrl);
  }

  criar(empresa: any){
    return this.http.post(this.empresasUrl, empresa);
  }

  excluir(empresa: any){
    return this.http.delete(this.empresasUrl + '/' + empresa.id);
  }
}
