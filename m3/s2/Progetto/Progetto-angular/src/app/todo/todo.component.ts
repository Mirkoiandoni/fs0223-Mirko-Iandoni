import { ITodo } from './../Iterfaces/todos';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../Services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todo: ITodo[] = [];
  oggetto: any;

  constructor(private todoSvc: TodosService) {}
  ngOnInit() {
    this.getRichiamo();
  }
  getRichiamo() {
    throw new Error('Method not implemented.');
  }
}
