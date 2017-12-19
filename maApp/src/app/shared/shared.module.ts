import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StateDirective } from './directives/state/state.directive';


@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [MenuComponent, StateDirective],
  exports: [
    MenuComponent,
    StateDirective
  ]
})
export class SharedModule { }
