import {RouterModule, Route} from '@angular/router';
import { NgModule } from '@angular/core';
import { PinboardComponent } from './pinboard/pinboard.component';
import { MemoEditComponent } from './memo-edit/memo-edit.component';


const routes: Route[] = [
  { path: '', redirectTo: 'pinboard' , pathMatch: 'full'},
  { path: 'pinboard', component: PinboardComponent, children: [
    { path: 'edit/:id', component: MemoEditComponent, outlet: 'sidebar'}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemoRoutingModule { }

