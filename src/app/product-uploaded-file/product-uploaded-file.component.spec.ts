import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUploadedFileComponent } from './product-uploaded-file.component';

describe('ProductUploadedFileComponent', () => {
  let component: ProductUploadedFileComponent;
  let fixture: ComponentFixture<ProductUploadedFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUploadedFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUploadedFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
