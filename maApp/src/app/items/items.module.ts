import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { ListeitemsComponent } from './containers/listeitems/listeitems.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ItemComponent, ListeitemsComponent],
  exports: [
    ItemComponent,
    ListeitemsComponent
  ]
})
export class ItemsModule { }
