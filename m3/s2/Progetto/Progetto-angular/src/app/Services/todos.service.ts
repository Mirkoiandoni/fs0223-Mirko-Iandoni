import { Injectable } from '@angular/core';
import { ITodo } from '../Iterfaces/todos';
import { addAggiungere } from
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  apiJson: string = 'http://localhost:3000/todos';

  constructor() {}

  getRisposta(): Promise<ITodo[]> {
    return fetch(this.apiJson).then((response) => response.json());
  }


addTodo(todo: ITodo): Promise<ITodo> {
    return fetch(this.apiJson, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    }).then((response) => response.json());
  }

  deleteTodo(id: number = 0) {
    return fetch(this.apiJson + '/' + id, {
      method: 'DELETE',
    }).then((response) => response.json());
  }


  changeStatus(id: number) {
    const thisUrl = `${this.apiJson}/${id}`;
    const data = { completed: true };
    return fetch(thisUrl, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json);
  }
  }




