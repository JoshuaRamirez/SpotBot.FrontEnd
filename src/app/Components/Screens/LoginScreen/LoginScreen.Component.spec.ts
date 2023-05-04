import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScreenComponent } from './LoginScreen.Component';

describe('LoginScreenComponent', () => {
  let component: LoginScreenComponent;
  let fixture: ComponentFixture<LoginScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginScreenComponent]
    });
    fixture = TestBed.createComponent(LoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
