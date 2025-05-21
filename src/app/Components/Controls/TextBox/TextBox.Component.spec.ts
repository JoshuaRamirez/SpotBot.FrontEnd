import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TextBoxComponent } from './TextBox.Component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TextBoxErrorStateMatcher} from "../Core/TextBoxErrorStateMatcher";

describe('TextBoxComponent', () => {
  let component: TextBoxComponent;
  let fixture: ComponentFixture<TextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
      ],
      declarations: [
        TextBoxComponent,
        // other components, directives, or pipes
      ],
      providers: [
        TextBoxErrorStateMatcher,
        // other services
      ],
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update TextBoxFormControl when Value is set', () => {
    const newValue = 'new value';
    component.Value = newValue;
    expect(component.TextBoxFormControl.value).toEqual(newValue);
  });

  it('should update internal value when Value is retrieved', () => {
    const newValue = 'new value';
    component.Value = newValue;
    expect(component.Value).toEqual(newValue);
  });

  it('should return type based on Masked value', () => {
    component.Masked = true;
    expect(component.Type).toEqual('password');
    component.Masked = false;
    expect(component.Type).toEqual('text');
  });

  it('should update internal value when input value changes', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'new value';
    inputElement.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    expect(component.Value).toBe('new value');
  });

  it('should show error when TextBoxFormControl is invalid', () => {
    component.TextBoxFormControl.setErrors({IsInvalid: true});
    component.TextBoxFormControl.markAsDirty();
    component.TextBoxFormControl.markAsTouched();
    fixture.detectChanges();
    const errorElement = fixture.debugElement.query(By.css('mat-error'));
    expect(errorElement).toBeTruthy();
  });

  it('should remove error when TextBoxFormControl is invalid and then valid', () => {
    component.TextBoxFormControl.setErrors({IsInvalid: true});
    component.TextBoxFormControl.markAsDirty();
    component.TextBoxFormControl.markAsTouched();
    fixture.detectChanges();
    component.TextBoxFormControl.setErrors(null);
    component.IsValid = true;
    fixture.detectChanges();
    const errorElement = fixture.debugElement.query(By.css('mat-error'));
    expect(errorElement).toBeNull();
  });

  it('should not show error when TextBoxFormControl is invalid but neither dirty nor touched', () => {
    component.TextBoxFormControl.setErrors({IsInvalid: true});
    fixture.detectChanges();
    const errorElement = fixture.debugElement.query(By.css('mat-error'));
    expect(errorElement).toBeNull();
  });

  it('should not show error when TextBoxFormControl is invalid and dirty but not touched', () => {
    component.TextBoxFormControl.setErrors({IsInvalid: true});
    component.TextBoxFormControl.markAsDirty();
    fixture.detectChanges();
    const errorElement = fixture.debugElement.query(By.css('mat-error'));
    expect(errorElement).toBeNull();
  });

  it('should not show error when TextBoxFormControl is invalid and touched but not dirty', () => {
    component.TextBoxFormControl.setErrors({IsInvalid: true});
    component.TextBoxFormControl.markAsTouched();
    fixture.detectChanges();
    const errorElement = fixture.debugElement.query(By.css('mat-error'));
    expect(errorElement).toBeNull();
  });

  it('should display correct placeholder text', () => {
    component.Placeholder = 'Test Placeholder';
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.placeholder).toEqual('Test Placeholder');
  });

  it('should display correct label text', () => {
    component.Label = 'Test Label';
    fixture.detectChanges();
    const labelElement = fixture.debugElement.query(By.css('mat-label')).nativeElement;
    expect(labelElement.textContent).toEqual('Test Label');
  });

  it('should mask input if Masked is true', () => {
    component.Masked = true;
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.type).toEqual('password');
  });

  it('should not mask input if Masked is false', () => {
    component.Masked = false;
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.type).toEqual('text');
  });

  it('should update the value of TextBoxFormControl when Value is set', () => {
    component.Value = 'Test Value';
    fixture.detectChanges();
    expect(component.TextBoxFormControl.value).toEqual('Test Value');
  });

});
