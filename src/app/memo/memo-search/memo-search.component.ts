import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tr-memo-search',
  templateUrl: './memo-search.component.html',
  styleUrls: ['./memo-search.component.scss']
})
export class MemoSearchComponent {
  @Output() change = new EventEmitter<string>();
}
