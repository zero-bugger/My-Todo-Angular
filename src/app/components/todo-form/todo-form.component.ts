import { Component, OnInit } from '@angular/core';
import { Todo } from "../../../../model/todo"
import {v4 as uuidv4} from "uuid";
import { TodoServiceService } from '../../services/todo-service.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
	
	todoTitle:string;
  constructor(private todoservice:TodoServiceService) { }

  ngOnInit(): void {
  }

	handleAdd(){
		const newTodo ={
			id:uuidv4(),
			title:this.todoTitle,
			isComplete:false,
			date:new Date()
			
		}
		this.todoservice.addTodo(newTodo);
		this.todoTitle="";
	}

}
