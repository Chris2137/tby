import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TbyMenuBarComponent } from './tby-menu-bar.component';
import { Router } from '@angular/router';

describe('TbyMenuBarComponent', () => {
  let component: TbyMenuBarComponent;
  let fixture: ComponentFixture<TbyMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbyMenuBarComponent, Router ]
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
