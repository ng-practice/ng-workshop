import { HttpClient } from '@angular/common/http';
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
  memos: Memo[] = [];
  queryObservable = new Subject< string >();
  editingObservable = new Subject< boolean >();
  _query = '';

  _editing = false;

  constructor(private http: HttpClient) {

  }

  getAllFromApi() {
    return this.http.get('http://localhost:4280/todos');
  }

  addMemo(memo: Memo) {
    this.memos.unshift(memo);
  }

  deleteMemo(memo) {
    this.memos.splice(this.memos.indexOf(this.memos.find(m => m.id === memo.id)), 1);
  }

  editMemo(memo) {
    console.log(memo.id);
    this.memos[this.memos.indexOf(this.memos.find(m => m.id === memo.id))] = memo;
    this.editing = false;
  }

  getById(id: String) {
    return this.memos.find(memo => memo.id === id);
  }

  search() {
    return this.queryObservable;
  }

  edit() {
    return this.editingObservable;
  }

  set query(q) {
    this.queryObservable.next(q);
  }

  set editing(editing) {
    this.editingObservable.next(editing);
  }




}
