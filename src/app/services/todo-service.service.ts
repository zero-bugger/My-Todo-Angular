import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import { Todo } from "../../../model/todo"

@Injectable({
  providedIn: 'root'
})

export class TodoServiceService {
 
  todos:Todo[];
	
  constructor() { 
  	this.todos =[
		{
		id:'111',
		title:'learn ang',
		isComplete:true,
		date:new Date()
     	},
			{
		id:'112',
		title:'learn react',
		isComplete:true,
		date:new Date()
     	},	{
		id:'113',
		title:'learn cpp',
		isComplete:false,
		date:new Date()
     	}
	]
  }
 	
  getTodos(){
	  
	  return of(this.todos);
	  
  }	
  
  addTodo(todo:Todo){

	  this.todos.push(todo);
  }
  
  changeStatus(todo:Todo){
	  this.todos.map( singleTodo =>{
		  if(singleTodo.id == todo.id){
			  todo.isComplete = !todo.isComplete;
		  }
	  })
  }
	
  deleteTodo(todo:Todo){
		const  index = this.todos.findIndex(	
			(currenobj)=>{
				currenobj.id === todo.id;	
			}
		);
		this.todos.splice(index,1);
	}
		
	
}
	