import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product } from '../product';
import { ProductItemInfoComponent } from './product-item-info.component';

describe('ProductItemInfoComponent', () => {
  let component: ProductItemInfoComponent;
  let fixture: ComponentFixture<ProductItemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemInfoComponent);
    component = fixture.componentInstance;
    const product: Product = new Product();
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
