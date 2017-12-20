import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { ListeitemsComponent } from './containers/listeitems/listeitems.component';
import { AddComponent } from './containers/add/add.component';
import { ItemRoutingModule } from './components/item/item-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule
  ],
  declarations: [ItemComponent, ListeitemsComponent, AddComponent],
  exports: [
    ItemComponent,
    ListeitemsComponent,
    AddComponent
  ]
})
export class ItemsModule { }
