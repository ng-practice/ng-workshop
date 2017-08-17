import { Component, OnInit } from '@angular/core';
import { Memo } from '../models/memo';
import { MemoService } from '../core/memo.service';

@Component({
  selector: 'tr-pinboard',
  templateUrl: './pinboard.component.html',
  styleUrls: ['./pinboard.component.scss']
})
export class PinboardComponent implements OnInit {
  memos: Memo[];

  constructor(private memoService: MemoService) {
    this.memos = memoService.memos;
  }

  ngOnInit() {
  }

  addMemo(memo: Memo) {
    this.memoService.addMemo(memo);
  }

  deleteMemo(memo: Memo) {
    this.memoService.deleteMemo(memo);
  }

}
