import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id : number,
    public description: string,
    public done: boolean,
    public targetDate:Date){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message :string

  todos : Todo[]
  //=[

    // new Todo(1, 'learn to dance', false, new Date()),
    // new Todo(2, 'learn Angular', false, new Date()),
    // new Todo(3, 'learn English', true, new Date()),
    // new Todo(4, 'Visit Europe', false, new Date()),
    
    // {id:1, description:'Learn to Dance'},
    // {id:2, description:'Learn to Angular'},
    // {id:3, description:'Grocery'}
  //]

  constructor(private service: TodoDataService,
    private route:Router ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.service.retrieveAllTodos('amit').subscribe(
      response => {
        console.log(response);
        this.todos=response;
      }
    )
  }

  deleteTodo(id){
    this.service.deleteTodoById('amit',id).subscribe(
      response => {
        console.log(response);
        this.message=`Delete Sucessful ${id} successfull`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    this.route.navigate(['todos', id])
  }

  addTodo(){
    this.route.navigate(['todos', -1])
  }

}
