import {
  Component, EventEmitter, Input, Output
} from "@angular/core";
import {FormControl} from "@angular/forms";
import {ManualValidator} from "../Core/ManualValidator";

@Component({
  selector: 'app-drop-down',
  templateUrl: './DropDown.Template.html'
})
export class DropDownComponent {

  @Input() Placeholder: string = '';
  @Input() Error: string = 'Invalid Input';
  @Input() Label: string = '';
  @Input() public IsDirty: boolean = false;
  @Input() public IsValid : boolean = false;
  @Input() public Options: any[] = [];
  @Output() ValueChange: EventEmitter<string> = new EventEmitter<string>();

  private _value: string = '';

  public DropDownFormControl: FormControl = new FormControl("SelectFormControl", [ManualValidator(this.IsValid)]);
  onInput($event: Event): void {
    const inputElement = $event.target as HTMLInputElement;
    const value = inputElement.value;
    this.IsDirty = true;
    this.DropDownFormControl.markAsDirty();
    this.DropDownFormControl.markAsTouched();
    this.Value = value;
  }
  onBlur(): void {
    this.DropDownFormControl.markAsTouched();
  }
  @Input() public set Value(value: string) {
    this._value = value;
    this.DropDownFormControl.setValue(value);
  }
  public get Value(): string {
    return this._value;
  }
}
