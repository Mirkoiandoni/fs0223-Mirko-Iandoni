import { ITodo } from './../Iterfaces/todos';
import { Component } from '@angular/core';
import { TodosService } from '../Services/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {



  export class CompletedComponent {

    todos:ITodo[] = [];
    loading:boolean = true;

    constructor(private todoSvc:TodosService){}

    ngOnInit(){
      this.getToDo();
    }

    getToDo(){
      this.todoSvc.getToDo().then((todosResponse: ITodo[]) =>{
        this.todos = todosResponse;
        this.loading = false;
      })
    }

  }





