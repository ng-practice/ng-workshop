import {RouterModule, Route} from '@angular/router';
import { PinboardComponent } from './pinboard/pinboard.component';
import { NgModule } from '@angular/core';


const routes: Route[] = [
  {path: '', redirectTo: 'pinboard' , pathMatch: 'full'},
  {path: 'pinboard', component: PinboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemoRoutingModule { }
