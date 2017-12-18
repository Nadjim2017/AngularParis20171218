import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [MenuComponent],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
