import { Pipe, PipeTransform } from '@angular/core';

import { Memo } from './../models/memo';

@Pipe({ name: 'memoFilter' })
export class MemoFilter implements PipeTransform {
  transform(memos: Memo[], query: string) {
    if (!memos || !query) { return memos; }

    query = query.toLowerCase();

    return memos.filter(m => m.title
                              .toLowerCase()
                              .indexOf(query) > -1);
  }
}
