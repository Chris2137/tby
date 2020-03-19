import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';

import { ProductEditorComponent } from './product-editor.component';
import { MessageService } from 'primeng/api';
import { ReactiveFormsModule} from '@angular/forms';
import {ChipsModule} from 'primeng/chips';

describe('ProductEditorComponent', () => {
  let component: ProductEditorComponent;
  let fixture: ComponentFixture<ProductEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MultiSelectModule, DropdownModule, ChipsModule],
      providers: [MessageService],
      declarations: [ ProductEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
