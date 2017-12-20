import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../colllection';
import { Item } from '../../../shared/interfaces/item.model';
import { CollectionService } from '../../../core/service/collection/collection.service';

@Component({
  selector: 'app-listeitems',
  templateUrl: './listeitems.component.html',
  styleUrls: ['./listeitems.component.scss']
})
export class ListeitemsComponent implements OnInit {
  collection: Item[];
  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }
}
