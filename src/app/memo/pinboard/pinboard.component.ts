import { Component, OnInit, Input } from '@angular/core';
import { Memo } from '../models/memo';
import { MemoService } from '../core/memo.service';
import { ToolbarComponent } from '../../navigation/toolbar/toolbar.component';

@Component({
  selector: 'tr-pinboard',
  templateUrl: './pinboard.component.html',
  styleUrls: ['./pinboard.component.scss']
})
export class PinboardComponent implements OnInit {
  memos: Memo[];


  query: String;
  constructor(private memoService: MemoService) {
    this.memos = memoService.memos;
  }

  ngOnInit() {
    this.memoService.search()
    .subscribe(query => {
      this.query = query;
    });
  }

  addMemo(memo: Memo) {
    this.memoService.addMemo(memo);
  }

  deleteMemo(memo: Memo) {
    this.memoService.deleteMemo(memo);
  }

  editMemo(memo: Memo) {
    this.memoService.editMemo(memo);
  }



}
