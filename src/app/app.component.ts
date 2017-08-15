import { Component } from '@angular/core';
import { Memo } from './memo/models/memo';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tr';
  memos: Memo[] = [
    new Memo('erste Notiz', 'denke daran Komponenten zu importieren und exportieren', []),
    new Memo('Angular Documentation', 'check out https://angular.io', []),
    new Memo('Einkaufsliste', 'Folgendes kannst du im Supermarkt holen', [])
  ];

  addMemo(memo: FormGroup) {
    this.memos.unshift(new Memo(memo.value.title, memo.value.text, []));
  }
}
