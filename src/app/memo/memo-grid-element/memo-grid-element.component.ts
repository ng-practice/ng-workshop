import { Component, OnInit } from '@angular/core';

import { Memo } from '../models/memo';

@Component({
  selector: 'tr-memo-grid-element',
  templateUrl: './memo-grid-element.component.html',
  styleUrls: ['./memo-grid-element.component.scss']
})
export class MemoGridElementComponent implements OnInit {
  memo: Memo = new Memo('erste Notiz', 'denke daran Komponenten zu importieren und exportieren', []);
  constructor() { }

  ngOnInit() {
  }

}
