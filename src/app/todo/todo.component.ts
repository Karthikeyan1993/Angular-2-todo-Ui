import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  private todo: Todo = new Todo;
  private todos: Todo[] = [];
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodoListResult();
  }

  private getTodoListResult(): void {
    this.todoService.getTodoList().subscribe(data => this.todos = data);
  }

  private saveTodoObject(): void {
    this.todo._todoId = 0;
    this.todo._isCompleted = false;
    this.todoService.saveTodo(this.todo).subscribe(data => console.log(data));
    setTimeout(() => {
      this.getTodoListResult();
    }, 100);
    this.clearModel();
  }
  private deleteTodoObejct(id: number) {
    this.todoService.deleteTodo(id).subscribe(data => console.log(data));
    setTimeout(() => {
      this.getTodoListResult();
    }, 100);
  }
  private updateTodoObject(id: number) {
    let _todo: Todo = new Todo();
    _todo = this.todos[id];
    _todo._isCompleted = true;
    console.log(_todo._isCompleted);
    console.log(_todo);
    this.todoService.updateTodoItem(_todo, _todo._todoId).subscribe(data => console.log(data));
    setTimeout(() => {
      this.getTodoListResult();
    }, 100);
  }
  private clearModel(): void {
    this.todo._todoName = '';
    this.todo._todoDesc = '';

  }
}
