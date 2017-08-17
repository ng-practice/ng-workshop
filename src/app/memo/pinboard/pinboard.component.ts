import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Memo } from '../models/memo';
import { MemoService } from '../core/memo.service';
import { ToolbarComponent } from '../../navigation/toolbar/toolbar.component';
import { MdSidenavContainer, MdSidenav } from '@angular/material';


@Component({
  selector: 'tr-pinboard',
  templateUrl: './pinboard.component.html',
  styleUrls: ['./pinboard.component.scss']
})
export class PinboardComponent implements OnInit {
  memos: Memo[];


  query: String;
  @ViewChild('sidenav') sidenav: MdSidenav;
  constructor(private memoService: MemoService) {
    this.memos = memoService.memos;
  }

  ngOnInit() {
    this.memoService.search()
    .subscribe(query => {
      this.query = query;
    });
    this.memoService.edit()
    .subscribe(editing => {
      this.sidenav.toggle(editing);
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
