import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Memo } from '../models/memo';
import { AddMemoComponent } from '../add-memo/add-memo.component';
import { MemoService } from '../core/memo.service';

@Component({
  selector: 'tr-memo-edit',
  templateUrl: './memo-edit.component.html',
  styleUrls: ['./memo-edit.component.scss']
})
export class MemoEditComponent extends AddMemoComponent implements OnInit, OnDestroy {
memo: Memo;

@Output() editing = new EventEmitter < boolean >();
@Output() edited = new EventEmitter< Memo >();
constructor(
  memoService: MemoService,
  private ar: ActivatedRoute,
  private router: Router) {
  super(memoService);
}

ngOnInit() {
  console.log('init');
  this.memoForm = this.emptyForm();
  this.memo = this.memoService.getById(this.ar.snapshot.params['id']);
  if (this.memo) {
    this.memoService.editing = true;

  this.memo.todos.map(todo => {
    this.todosArray.push (new FormGroup({
      checked: new FormControl(todo.checked),
      task: new FormControl(todo.task, Validators.required)
    })
  );
  });

this.memoForm.controls.title.setValue(this.memo.title);
this.memoForm.controls.text.setValue(this.memo.text);
} else {
  this.router.navigate(['/pinboard']);
}
}

save(form) {
  const memo = new Memo(this.memoForm.controls.title.value, this.memoForm.controls.text.value, this.setTodos());
  memo.id = this.memo.id;
  this.memoService.editMemo(memo);

}

ngOnDestroy() {
  this.memoService.editing = false;
}


}
