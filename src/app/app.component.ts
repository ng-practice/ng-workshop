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

  applyQuery(query: string) {
    this.query = query;
  }

}
