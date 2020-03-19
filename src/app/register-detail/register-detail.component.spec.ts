import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { RegisterDetailComponent } from './register-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent} from '../login/login.component';

describe('RegisterDetailComponent', () => {
  let component: RegisterDetailComponent;
  let fixture: ComponentFixture<RegisterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule.withRoutes(
                                             [{path: 'login', component: LoginComponent}]
                                           )],
      providers: [{provide: ActivatedRoute,
                       useValue: {
                           snapshot: {
                               paramMap: {
                                   get(): string {
                                       return '123';
                                   },
                               },
                           },
                       },}],
      declarations: [ RegisterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
