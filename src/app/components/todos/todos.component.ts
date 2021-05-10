import { Component, OnInit } from '@angular/core';

import { TodoServiceService } from '../../services/todo-service.service';

import { Todo } from "../../../../model/todo"

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

	faTrashAlt=faTrashAlt;
	todos:Todo[];
  constructor(private todoservice:TodoServiceService) {
  	
	  
  }

  ngOnInit(): void {
	  this.todoservice.getTodos().subscribe(todo =>{
		  this.todos = todo;
	  })
  }
	
  changeTodoStatus(todo:Todo){
	  this.todoservice.changeStatus(todo);
  }	
  
  deleteTodo(todo:Todo){
	  this.todoservice.deleteTodo(todo);
  }
}
