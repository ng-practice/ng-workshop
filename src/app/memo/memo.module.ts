import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MemoGridElementComponent } from './memo-grid-element/memo-grid-element.component';
import { MemoGridComponent } from './memo-grid/memo-grid.component';
import { MdCardModule, MdGridListModule, MdInputModule, MdListModule, MdButtonModule } from '@angular/material';
import { AddMemoComponent } from './add-memo/add-memo.component';


@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdListModule,
    MdGridListModule,
    MdInputModule,
    MdButtonModule,
    ReactiveFormsModule
  ],
  declarations: [MemoGridElementComponent, MemoGridComponent, AddMemoComponent],
  exports: [MemoGridElementComponent, MemoGridComponent, AddMemoComponent]
})
export class MemoModule { }
