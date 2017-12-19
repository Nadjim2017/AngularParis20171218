import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../colllection';
import { Item } from '../../../shared/interfaces/item.model';

@Component({
  selector: 'app-listeitems',
  templateUrl: './listeitems.component.html',
  styleUrls: ['./listeitems.component.scss']
})
export class ListeitemsComponent implements OnInit {
  collection: Item[];
  constructor() { }

  ngOnInit() {
    this.collection = COLLECTION;
  }

}
