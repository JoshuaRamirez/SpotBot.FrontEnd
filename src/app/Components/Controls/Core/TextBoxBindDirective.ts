import {Directive, EventEmitter, forwardRef, HostListener, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Directive({
  selector: 'app-text-box[Bind], input[Bind]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextBoxBindDirective),
      multi: true,
    },
  ],
})
export class TextBoxBindDirective implements ControlValueAccessor {

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

  @HostListener('keyup', ['$event.target.value'])
  public onInput(value: any) {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }
}
