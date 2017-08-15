import { Component } from '@angular/core';
import { Memo } from './memo/models/memo';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  query: string;

  memos: Memo[] = [
    new Memo('erste Notiz', 'denke daran Komponenten zu importieren und exportieren', []),
    new Memo('Angular Documentation', 'check out https://angular.io', []),
    new Memo('Einkaufsliste', 'Folgendes kannst du im Supermarkt holen', [])
  ];

  addMemo(memo: Memo) {
    this.memos.unshift(memo);
  }

  applyQuery(query: string) {
    this.query = query;
  }
}
