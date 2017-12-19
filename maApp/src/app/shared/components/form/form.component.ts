import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  newItem: Item;
  state = State;
  @Output() dataItem: EventEmitter<Item> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.reset();
  }
  process(): void {
    this.dataItem.emit(this.newItem);
    this.reset();
  }
  reset(): void {
    this.newItem = {
      name: '',
      reference: '',
      state: State.ALIVRER
    };
  }
}
