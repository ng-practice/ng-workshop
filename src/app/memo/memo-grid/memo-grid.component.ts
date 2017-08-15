import { Component, OnInit } from '@angular/core';

import { Memo } from '../models/memo';

@Component({
  selector: 'tr-memo-grid',
  templateUrl: './memo-grid.component.html',
  styleUrls: ['./memo-grid.component.scss']
})
export class MemoGridComponent implements OnInit {
  memos: Memo[] = [
    new Memo('erste Notiz', 'denke daran Komponenten zu importieren und exportieren', []),
    new Memo('Angular Documentation', 'check out https://angular.io', []),
    new Memo('Einkaufsliste', 'Folgendes kannst du im Supermarkt holen', [])
  ];

  constructor() { }

  ngOnInit() {
  }

}
