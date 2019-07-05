import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuComponent } from './main-menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should change isMenuShown to false after toggle', () => {
    component.isMenuShown = true;

    component.toggleMenu();

    expect(component.isMenuShown).toBeFalsy();
  });


  it('should change isMenuShown to false after button click', () => {
    component.isMenuShown = false;

    fixture.debugElement.querySelector('button.navbar-toggler').click();

    expect(component.isMenuShown).toBeFalsy();
  });*/
});
