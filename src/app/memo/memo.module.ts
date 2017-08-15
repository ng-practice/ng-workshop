import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoGridElementComponent } from './memo-grid-element/memo-grid-element.component';
import { MemoGridComponent } from './memo-grid/memo-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MemoGridElementComponent, MemoGridComponent],
  exports: [MemoGridElementComponent, MemoGridComponent]
})
export class MemoModule { }
