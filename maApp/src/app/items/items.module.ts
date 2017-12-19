import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { ListeitemsComponent } from './containers/listeitems/listeitems.component';
import { AddComponent } from './containers/add/add.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ItemComponent, ListeitemsComponent, AddComponent],
  exports: [
    ItemComponent,
    ListeitemsComponent,
    AddComponent
  ]
})
export class ItemsModule { }
