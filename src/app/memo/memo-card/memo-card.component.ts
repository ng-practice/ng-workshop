import { Component, Input } from '@angular/core';
import { MdCard } from '@angular/material';

import { Memo } from '../models/memo';

@Component({
  selector: 'tr-memo-card',
  templateUrl: './memo-card.component.html',
  styleUrls: ['./memo-card.component.scss']
})
export class MemoCardComponent {
  @Input() memo: Memo;
}
