import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'tr-add-memo',
  templateUrl: './add-memo.component.html',
  styleUrls: ['./add-memo.component.scss']
})
export class AddMemoComponent implements OnInit {
  @Output() saveEvent = new EventEmitter<FormGroup>();

  memoForm: FormGroup;

  ngOnInit() {
    this.memoForm = this.emptyForm();
  }

  save() {
    this.saveEvent.emit(this.memoForm);
  }

  private emptyForm(): FormGroup {
    return new FormGroup({
      title: new FormControl(''),
      text: new FormControl('')
    });
  }
}
