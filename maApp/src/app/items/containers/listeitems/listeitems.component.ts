import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../colllection';
import { Item } from '../../../shared/interfaces/item.model';
import { CollectionService } from '../../../core/service/collection/collection.service';
import { Observable } from 'rxjs/Observable';
import { ItemId } from '../../../shared/interfaces/item-id.model';

@Component({
  selector: 'app-listeitems',
  templateUrl: './listeitems.component.html',
  styleUrls: ['./listeitems.component.scss']
})
export class ListeitemsComponent implements OnInit {
  collection: Observable<ItemId[]>;
  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
    this.collection.subscribe(data => console.log(data));
  }
}
