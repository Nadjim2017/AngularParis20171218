import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../colllection';
import { Item } from '../../../shared/interfaces/item.model';
import { CollectionService } from '../../../core/service/collection/collection.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  collection: Item[];
  constructor(private _CollectionService: CollectionService ) { }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }
  addItem(item: Item): void {
    this._CollectionService.addItem(item);
  }
}
