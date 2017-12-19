import { Directive, Input, OnChanges, ElementRef, Renderer2 } from '@angular/core';
import { State } from '../../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
@Input('appState') appState;
  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) { }

  ngOnChanges(): void {
    const ElementNode = this._ElementRef.nativeElement;
    const cssClss = `state-${this.appState}`;
    let text: string;
    switch (this.appState) {
      case State.ALIVRER:
      text = 'A livrer';
      break;
      case State.ENCOURS:
      text = 'En cours';
      break;
      case State.LIVREE:
      text = 'Commande livrée';
      break;
      default:
      console.log(this.appState);
    }
    this._Renderer2.addClass(ElementNode, cssClss);
    ElementNode.textContent = text;

  }
}
