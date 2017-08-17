import {
  Injectable
} from '@angular/core';
import {
  Memo
} from '../models/memo';
import {
  Observable
} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MemoService {
  memos: Memo[];
  queryObservable = new Subject< string >();
  _query = '';

  constructor() {
    this.memos = [
      new Memo('erste Notiz', 'denke daran Komponenten zu importieren und exportieren', []),
      new Memo('Angular Documentation', 'check out https://angular.io', []),
      new Memo('Einkaufsliste', 'Folgendes kannst du im Supermarkt holen', [])
    ];
    this.memos.forEach(memo => {
      memo.id = Math.random().toString();
    });
  }
  addMemo(memo: Memo) {
    this.memos.unshift(memo);
  }

  deleteMemo(memo) {
    this.memos.splice(this.memos.indexOf(this.memos.find(m => m.id === memo.id)), 1);
  }

  editMemo(memo) {
    this.memos[this.memos.indexOf(this.memos.find(m => m.id === memo.id))] = memo;
  }

  getById(id: String) {
    return this.memos.find(memo => memo.id === id);
  }

  search() {
    return this.queryObservable;
  }

  set query(q) {
    this.queryObservable.next(q);
  }


}
