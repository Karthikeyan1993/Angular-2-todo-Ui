import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Todo } from './todo';
@Injectable()
export class TodoService {

  constructor(private http: Http) { }
  getTodoList(): any {
    return this.http.get('http://localhost:8081/api/v1/todos').map((res: Response) => res.json());
  }
  saveTodo(todo: any): any {
    return this.http.post('http://localhost:8081/api/v1/todo', todo).map((res: Response) => res.json());
  }
  deleteTodo(id: number): any {
    return this.http.delete('http://localhost:8081/api/v1/todo/' + id).map((res: Response) => res.toString());
  }
  updateTodoItem(todo: any, id: number): any {
    return this.http.post('http://localhost:8081/api/v1/todo/' + id, todo).map((res: Response) => res.toString());
  }

}
