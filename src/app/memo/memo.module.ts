import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoGridElementComponent } from './memo-grid-element/memo-grid-element.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MemoGridElementComponent],
  exports: [MemoGridElementComponent]
})
export class MemoModule { }
