import { Component } from '@angular/core';
import { Memo } from './memo/models/memo';
import { FormGroup } from '@angular/forms';
import { MemoService } from './memo/core/memo.service';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  query: string;
  memos: Memo[];

  constructor(private memoService: MemoService) {
    this.memos = memoService.memos;
  }

  applyQuery(query: string) {
    this.query = query;
  }

  addMemo(memo: Memo) {
    this.memoService.addMemo(memo);
  }

  deleteMemo(memo: Memo) {
    this.memoService.deleteMemo(memo);
  }
}
