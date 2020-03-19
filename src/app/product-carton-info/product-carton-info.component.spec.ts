import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartonInfoComponent } from './product-carton-info.component';
import { ControlContainer } from '@angular/forms';

describe('ProductCartonInfoComponent', () => {
  let component: ProductCartonInfoComponent;
  let fixture: ComponentFixture<ProductCartonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCartonInfoComponent, ControlContainer ]
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
