import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditorComponent } from './product-editor.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ReactiveFormsModule} from '@angular/forms';

describe('ProductEditorComponent', () => {
  let component: ProductEditorComponent;
  let fixture: ComponentFixture<ProductEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [MessageService, {provide: ActivatedRoute,
                                                         useValue: {
                                                             snapshot: {
                                                                 paramMap: {
                                                                     get(): string {
                                                                         return '123';
                                                                     },
                                                                 },
                                                             },
                                                         },}],
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
