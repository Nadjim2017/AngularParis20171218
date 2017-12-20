import { Injectable } from '@angular/core';
import { COLLECTION } from '../../../items/colllection';
import { Item } from '../../../shared/interfaces/item.model';

@Injectable()
export class CollectionService {
  collection: Item[];

  constructor() {
    this.collection = this.getCollection();
  }

// get collection
getCollection() {
  return this.collection = COLLECTION;
}

// add item in collection
addItem(item: Item) {
this.collection.push(item);
}

// update item in collection
update() {}

// delete item in collection
delete() {}
}
