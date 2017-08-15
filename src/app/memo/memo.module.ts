import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoGridElementComponent } from './memo-grid-element/memo-grid-element.component';
import { MemoGridComponent } from './memo-grid/memo-grid.component';
import { MdCardModule, MdGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdGridListModule
  ],
  declarations: [MemoGridElementComponent, MemoGridComponent],
  exports: [MemoGridElementComponent, MemoGridComponent]
})
export class MemoModule { }
