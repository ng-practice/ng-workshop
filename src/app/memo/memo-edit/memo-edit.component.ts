import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Memo } from '../models/memo';
import { AddMemoComponent } from '../add-memo/add-memo.component';
import { MemoService } from '../core/memo.service';

@Component({
  selector: 'tr-memo-edit',
  templateUrl: './memo-edit.component.html',
  styleUrls: ['./memo-edit.component.scss']
})
export class MemoEditComponent extends AddMemoComponent implements OnInit {
memo: Memo;

@Output() edited = new EventEmitter< Memo >();
constructor(memoService: MemoService, private ar: ActivatedRoute) {
  super(memoService);
}

ngOnInit() {
  this.memoForm = this.emptyForm();
  this.memo = this.memoService.getById(this.ar.snapshot.params['id']);
  this.todosArray = new FormArray(this.memo.todos.map(todo => {
    return new FormGroup({
      checked: new FormControl(todo.checked),
      task: new FormControl(todo.task, Validators.required)
    });
  })
);
this.memoForm.controls.title.setValue(this.memo.title);
this.memoForm.controls.text.setValue(this.memo.text);
}

save(form) {
  this.memo = new Memo(this.memoForm.controls.title.value, this.memoForm.controls.text.value, this.setTodos());
  this.edited.emit(this.memo);
}

}
