import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DropDownComponent } from './DropDown.Component';

describe('DropDownComponent', () => {
  let component: DropDownComponent;
  let fixture: ComponentFixture<DropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        NoopAnimationsModule,
      ],
      declarations: [DropDownComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update DropDownFormControl when Value is set', () => {
    component.Value = 'Option1';
    expect(component.DropDownFormControl.value).toEqual('Option1');
  });

  it('should update internal value when Value is retrieved', () => {
    component.Value = 'Option2';
    expect(component.Value).toEqual('Option2');
  });

  it('should mark control as dirty and touched on input', () => {
    const select = fixture.debugElement.query(By.css('mat-select'));
    select.triggerEventHandler('input', { target: { value: 'Option1' } });
    fixture.detectChanges();

    expect(component.IsDirty).toBeTrue();
    expect(component.DropDownFormControl.dirty).toBeTrue();
    expect(component.DropDownFormControl.touched).toBeTrue();
    expect(component.Value).toEqual('Option1');
  });

  it('should mark control as touched on blur', () => {
    const select = fixture.debugElement.query(By.css('mat-select'));
    select.triggerEventHandler('blur', {});
    fixture.detectChanges();
    expect(component.DropDownFormControl.touched).toBeTrue();
  });

  it('should display provided label', () => {
    component.Label = 'Test Label';
    fixture.detectChanges();
    const labelElement = fixture.debugElement.query(By.css('mat-label')).nativeElement;
    expect(labelElement.textContent).toEqual('Test Label');
  });

  it('should accept options', () => {
    component.Options = ['A', 'B'];
    fixture.detectChanges();
    expect(component.Options).toEqual(['A', 'B']);
  });
});
