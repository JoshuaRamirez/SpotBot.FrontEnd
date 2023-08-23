import {Directive, EventEmitter, forwardRef, HostListener, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Directive({
  selector: 'app-drop-down[Bind], select[Bind]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownBindDirective),
      multi: true,
    },
  ],
})
export class DropDownBindDirective implements ControlValueAccessor {

  @Input('Bind')
  public value: any;

  @Output('BindChange')
  public valueChange: EventEmitter<any> = new EventEmitter();

  public onChange: any = () => {};
  public onTouched: any = () => {};

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('change', ['$event.target.value'])
  public onInput(value: any) {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }
}
