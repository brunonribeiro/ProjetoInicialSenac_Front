import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../_models/Funcionario';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  funcionariosUrl = 'http://localhost:5000/api/funcionarios';

  constructor(private http: HttpClient) {}

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.funcionariosUrl);
  }

  salvar(funcionario: any, success: any, fail: any) {
    return this.http.post(this.funcionariosUrl, funcionario).subscribe(
      (resposta) => {
        success(resposta);
      },
      (ex) => {
        fail(ex);
      }
    );
  }

  excluir(funcionario: Funcionario) {
    return this.http.delete(this.funcionariosUrl + '/' + funcionario.id);
  }

  buscarPorId(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.funcionariosUrl}/${id}`);
  }

  vincularEmpresa(funcionario: Funcionario, success: any, fail: any) {
    this.http
      .put<Funcionario>(
        `${this.funcionariosUrl}/${funcionario.id}/vincularempresa/${funcionario.empresaId}`,
        funcionario
      )
      .subscribe(
        (resposta) => {
          success(resposta);
        },
        (ex) => {
          fail(ex);
        }
      );
  }

  atribuirCargo(funcionario: Funcionario, success: any, fail: any) {
    this.http
      .put<Funcionario>(
        `${this.funcionariosUrl}/${funcionario.id}/atribuircargo/${funcionario.cargoId}`,
        funcionario
      )
      .subscribe(
        (resposta) => {
          success(resposta);
        },
        (ex) => {
          fail(ex);
        }
      );
  }
}
