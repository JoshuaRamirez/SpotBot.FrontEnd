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
  @Output() Updated: EventEmitter<string> = new EventEmitter<string>();

  private _value: string = '';

  public TextBoxFormControl: FormControl = new FormControl("SelectFormControl", [ManualValidator(this.IsValid)]);
  @Input() public set Value(value: string) {
    this._value = value;
    this.TextBoxFormControl.setValue(value);
  }
  public get Value(): string {
    return this._value;
  }
}
