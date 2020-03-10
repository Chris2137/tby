import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartonInfoComponent } from './product-carton-info.component';

describe('ProductCartonInfoComponent', () => {
  let component: ProductCartonInfoComponent;
  let fixture: ComponentFixture<ProductCartonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCartonInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
