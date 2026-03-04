import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // O Service é responsável por consumir a API

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  //
  constructor(private http: HttpClient){
  }

  // Função para listar os itens do Array dentro da API
  listarUsuarios(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  // Função para buscar o ID  e retornar as informações daquele item do Array
  buscarUsuarioPorId(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}` // Define qual será o caminho acessado na URL, acessa o link da API, e define o ID que será exibido
    return this.http.get<User>(url); // Retorna o caminho definido
  }

}
