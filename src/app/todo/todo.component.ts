import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}
let _id = 1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  userIput = new FormControl();
  todos: Array<ITodo> = [];

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    const {value} = this.userIput;
    if (value) {
      const todo: ITodo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userIput.setValue('');
    }
  }

  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete
  }
}
