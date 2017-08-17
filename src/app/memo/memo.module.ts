import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MemoCardComponent } from './memo-card/memo-card.component';
import { MemoGridComponent } from './memo-grid/memo-grid.component';
import {
  MdCardModule,
  MdGridListModule,
  MdInputModule,
  MdListModule,
  MdButtonModule,
  MdCheckboxModule,
  MdSidenavModule } from '@angular/material';
import { AddMemoComponent } from './add-memo/add-memo.component';
import { MemoSearchComponent } from './memo-search/memo-search.component';

import { MemoFilter } from './pipes/memo-filter.pipe';
import { PinboardComponent } from './pinboard/pinboard.component';
import { MemoRoutingModule } from './memo.routing.module';
import { MemoEditComponent } from './memo-edit/memo-edit.component';
import { UtilitiesModule } from './utilities/utilities.module';
import { Linkify } from './pipes/linkify.pipe';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdListModule,
    MdGridListModule,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    UtilitiesModule,
    MemoRoutingModule
  ],
  declarations: [
    MemoCardComponent,
    MemoGridComponent,
    AddMemoComponent,
    MemoSearchComponent,

    MemoFilter,
    Linkify,
    PinboardComponent,

    MemoEditComponent
  ],
  exports: [
    PinboardComponent,
    MemoSearchComponent,
    MemoEditComponent
  ]
})
export class MemoModule { }
