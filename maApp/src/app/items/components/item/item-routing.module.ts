import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListeitemsComponent } from '../../containers/listeitems/listeitems.component';
import { AddComponent } from '../../containers/add/add.component';

const appRoutes: Routes = [
  { path: 'list', component: ListeitemsComponent},
  { path: 'add', component: AddComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: []
})
export class ItemRoutingModule { }
