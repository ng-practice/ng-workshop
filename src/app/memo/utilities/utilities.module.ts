import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkifyDirective } from './content-modifiers/linkify.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LinkifyDirective],
  exports: [LinkifyDirective]
})
export class UtilitiesModule { }
