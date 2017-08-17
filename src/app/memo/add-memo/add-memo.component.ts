import {
  Todo
} from '../models/todo';
import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  Form,
  NgForm
} from '@angular/forms';
import {
  MdButton,
  MdCheckbox
} from '@angular/material';

import {
  Memo
} from '../models/memo';
import { MemoService } from '../core/memo.service';

@Component({
  selector: 'tr-add-memo',
  templateUrl: './add-memo.component.html',
  styleUrls: ['./add-memo.component.scss']
})
export class AddMemoComponent implements OnInit {
  @Output() create = new EventEmitter < Memo > ();

  memoForm: FormGroup;
  todosArray: FormArray = new FormArray([]);
  componentHasFocus = false;

  constructor(
    private fb: FormBuilder,
    private memoService: MemoService ) {}

  ngOnInit() {
    this.memoForm = this.emptyForm();
  }

  emitCreatedBook(form: NgForm) {
    const memo = new Memo(
      this.memoForm.controls.title.value,
      this.memoForm.controls.text.value, []
    );

    memo.todos = this.todosArray.controls.map(todo => {
      const t: Todo = todo.value;
      t.id = this.todosArray.controls.indexOf(todo).toString();
      return t;
    });

    this.create.emit(memo);
    this.memoForm = this.emptyForm();
    form.resetForm();
  }

  private emptyForm(): FormGroup {
    this.todosArray = new FormArray([]);
    return new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      text: new FormControl(''),
      todos: this.todosArray
    });
  }

  private addTodo() {
    this.todosArray.push(new FormGroup({
      checked: new FormControl(false),
      task: new FormControl('', Validators.required)
    }));
  }

  private removeTodo(index: number) {
    this.todosArray.removeAt(index);
  }

  private abort() {
    this.memoForm = this.emptyForm();
    this.setFocus(false);
  }

  private setFocus(hasFocus: boolean) {
    this.componentHasFocus = hasFocus;
  }
}
