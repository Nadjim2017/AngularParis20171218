import { Item } from '../shared/interfaces/item.model';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    name: 'Christophe',
    reference: '5214',
    state: State.ALIVRER
  },
  {
    name: 'Julien',
    reference: '1234',
    state: State.ENCOURS
  },
  {
    name: 'Stéphanie',
    reference: '7890',
    state: State.LIVREE
  }
];
