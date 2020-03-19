import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TbyMenuBarComponent } from './tby-menu-bar.component';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

describe('TbyMenuBarComponent', () => {
  let component: TbyMenuBarComponent;
  let fixture: ComponentFixture<TbyMenuBarComponent>;

  class MockRouter {
    public ne = new NavigationEnd(0, 'http://localhost:4200/login', 'http://localhost:4200/login');
    public events = new Observable(observer => {
      observer.next(this.ne);
      observer.complete();
    });
  }

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ TbyMenuBarComponent ],
      providers: [{ provide: Router, useClass: MockRouter }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbyMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
