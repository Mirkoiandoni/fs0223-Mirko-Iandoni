import { ITodo } from './../Iterfaces/todos';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../Services/todos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: ITodo[] = [];
  loading: boolean = true;
  element: ITodo = new todo('', false);

  constructor(private todoSvc: TodosService, private router: Router) {}

  ngOnInit() {
    this.getToDo();
  }

  deleteToDo(id?: number) {
    this.todoSvc.deleteTodo(id).then((res) => {
      console.log('Elemento Eliminato');
      this.getToDo();
    });
  }

  create() {
    this.todoSvc.addTodo(this.element).then((res) => {
      this.getToDo();
    });
  }

  completed(element: ITodo) {
    if (element.completed == false) {
      element.completed = true;
      this.todoSvc.updateToDo(element).then(() => this.getToDo());
    }
  }

  getToDo() {
    this.todoSvc.getToDo().then((todosResponse: ITodo[]) => {
      this.todos = todosResponse;
      this.loading = false;
    });
  }
}
