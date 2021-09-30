import { Injectable } from '@angular/core';
import { Todo } from '../model/Todo';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[]
  constructor() {
    this.todos = [
      {
        id: "111",
        title: "Learn CPP",
        isCompleted: true,
        date: new Date()
      },
      {
        id: "222",
        title: "Learn React",
        isCompleted: true,
        date: new Date()
      },
      {
        id: "333",
        title: "Learn Angular",
        isCompleted: false,
        date: new Date()
      },
    ]
  }
  //CRUD Part --> Business Logic

  //READ
  getTodos() {
    return of(this.todos) // Made whole array as observabale
  }

  //CREATE
  addTodos(todo: Todo) {
    this.todos.push(todo)
  }

  //UPDATE
  changeStatus(todo: Todo) {
    this.todos.map(singleTodo => {
      if (singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted
        /* it will toggle from true to false 
                          OR
          it will toggle from false to true
        */
      }
    })
  }
  //DELETE
  deleteTodo(todo: Todo) {
    const indexOfTodo = this.todos.findIndex(
      (currentObject) => currentObject.id === todo.id
    );
    this.todos.splice(indexOfTodo, 1)
  }
}
