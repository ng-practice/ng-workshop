import { Component, OnInit, Input } from '@angular/core';
import { MdCard } from '@angular/material';

import { Memo } from '../models/memo';

@Component({
  selector: 'tr-memo-grid-element',
  templateUrl: './memo-grid-element.component.html',
  styleUrls: ['./memo-grid-element.component.scss']
})
export class MemoGridElementComponent implements OnInit {
  @Input() memo: Memo;
  constructor() { }

  ngOnInit() {
  }

}
