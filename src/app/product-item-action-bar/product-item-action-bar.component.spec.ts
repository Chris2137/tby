import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemActionBarComponent } from './product-item-action-bar.component';

describe('ProductItemActionBarComponent', () => {
  let component: ProductItemActionBarComponent;
  let fixture: ComponentFixture<ProductItemActionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemActionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
