import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../_models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

funcionariosUrl = 'http://localhost:5000/api/funcionarios';

  constructor(private http: HttpClient) {}

  listar(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.funcionariosUrl);
  }

  salvar(funcionario: any) {
    return this.http.post(this.funcionariosUrl, funcionario);
  }

  excluir(funcionario: Funcionario){
    return this.http.delete(this.funcionariosUrl + '/' + funcionario.id);
  }

  buscarPorId(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.funcionariosUrl}/${id}`);
  }

  vincularEmpresa(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(
      `${this.funcionariosUrl}/${funcionario.id}/vincularempresa/${funcionario.empresaId}`,
      funcionario
    );
  }

  atribuirCargo(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(
      `${this.funcionariosUrl}/${funcionario.id}/atribuircargo/${funcionario.cargoId}`,
      funcionario
    );
  }

}
