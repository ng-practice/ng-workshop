import { Component, OnInit, Input } from '@angular/core';
import { MdGridList } from '@angular/material';
import { Memo } from '../models/memo';

@Component({
  selector: 'tr-memo-grid',
  templateUrl: './memo-grid.component.html',
  styleUrls: ['./memo-grid.component.scss']
})
export class MemoGridComponent implements OnInit {
  @Input() memosInput;

  constructor() { }

  ngOnInit() {
  }

}
