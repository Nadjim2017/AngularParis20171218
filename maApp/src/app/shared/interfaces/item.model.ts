import { State } from '../enums/state.enum';

export interface Item {
  name: string;
  reference: string;
  state: State;
}
