import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Memo } from '../models/memo';

@Component({
  selector: 'tr-add-memo',
  templateUrl: './add-memo.component.html',
  styleUrls: ['./add-memo.component.scss']
})
export class AddMemoComponent implements OnInit {
  @Output() create = new EventEmitter<Memo>();

  memoForm: FormGroup;

  ngOnInit() {
    this.memoForm = this.emptyForm();
  }

  emitCreatedBook() {
    const memo = new Memo(
      this.memoForm.controls.title.value,
      this.memoForm.controls.text.value,
      []
    );

    this.create.emit(memo);
  }

  private emptyForm(): FormGroup {
    return new FormGroup({
      title: new FormControl(''),
      text: new FormControl('')
    });
  }
}
