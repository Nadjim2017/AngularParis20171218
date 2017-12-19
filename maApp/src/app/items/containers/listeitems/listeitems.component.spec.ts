import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeitemsComponent } from './listeitems.component';

describe('ListeitemsComponent', () => {
  let component: ListeitemsComponent;
  let fixture: ComponentFixture<ListeitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
