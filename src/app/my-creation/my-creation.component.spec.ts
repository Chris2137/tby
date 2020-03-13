import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCreationComponent } from './my-creation.component';

describe('MyCreationComponent', () => {
  let component: MyCreationComponent;
  let fixture: ComponentFixture<MyCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
