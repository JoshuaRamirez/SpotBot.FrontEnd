import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeScreenComponent } from './ExchangeScreen.Component';

describe('ApiCredentialsComponent', () => {
  let component: ExchangeScreenComponent;
  let fixture: ComponentFixture<ExchangeScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeScreenComponent]
    });
    fixture = TestBed.createComponent(ExchangeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
