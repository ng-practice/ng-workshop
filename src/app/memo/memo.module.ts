import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MemoCardComponent } from './memo-card/memo-card.component';
import { MemoGridComponent } from './memo-grid/memo-grid.component';
import { MdCardModule, MdGridListModule, MdInputModule, MdListModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { AddMemoComponent } from './add-memo/add-memo.component';
import { MemoSearchComponent } from './memo-search/memo-search.component';

import { MemoFilter } from './pipes/memo-filter.pipe';
import { PinboardComponent } from './pinboard/pinboard.component';
import { MemoRoutingModule } from './memo.routing.module';
import { MemoEditComponent } from './memo-edit/memo-edit.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdListModule,
    MdGridListModule,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MemoRoutingModule
  ],
  declarations: [
    MemoCardComponent,
    MemoGridComponent,
    AddMemoComponent,
    MemoSearchComponent,

    MemoFilter,

    PinboardComponent,

    MemoEditComponent
  ],
  exports: [
    PinboardComponent,
    MemoSearchComponent
  ]
})
export class MemoModule { }
