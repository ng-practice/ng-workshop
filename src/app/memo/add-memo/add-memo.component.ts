import { Todo } from '../models/todo';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MdButton, MdCheckbox } from '@angular/material';

import { Memo } from '../models/memo';

@Component({
  selector: 'tr-add-memo',
  templateUrl: './add-memo.component.html',
  styleUrls: ['./add-memo.component.scss']
})
export class AddMemoComponent implements OnInit {
  @Output() create = new EventEmitter<Memo>();

  memoForm: FormGroup;
  todosArray: FormArray = new FormArray([]);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.memoForm = this.emptyForm();
  }

  emitCreatedBook() {
    const memo = new Memo(
      this.memoForm.controls.title.value,
      this.memoForm.controls.text.value,
      []
    );

    memo.todos = this.todosArray.controls.map(todo =>
      new Todo(
        todo.value.task,
        this.todosArray.controls.indexOf(todo).toString(),
        todo.value.checked
      )
    );

    this.create.emit(memo);
  }

  private emptyForm(): FormGroup {
    this.todosArray = new FormArray([]);
    return this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      text: new FormControl(''),
      todos: this.todosArray
    });
  }

  private addTodo() {
    this.todosArray.push(new FormGroup({
      checked: new FormControl(false),
      task: new FormControl('')}));
  }

  private removeTodo(index: number) {
    this.todosArray.removeAt(index);
  }
}
