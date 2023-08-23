import {
  Component, EventEmitter, Input, Output
} from "@angular/core";
import {FormControl} from "@angular/forms";
import {ManualValidator} from "../Core/ManualValidator";
import {TextBoxErrorStateMatcher} from "../Core/TextBoxErrorStateMatcher";

@Component({
  selector: 'app-text-box',
  templateUrl: './TextBox.Template.html',
  //styleUrls: ['./TextBox.Styles.scss']
})
export class TextBoxComponent {
  @Input() Placeholder: string = '';
  @Output() Updated: EventEmitter<string> = new EventEmitter<string>();
  @Input() Error: string = 'Invalid Input';
  @Input() Label: string = '';
  @Input() Masked: boolean = false;
  @Input() public IsDirty: boolean = false;
  @Input() public IsValid : boolean = false;

  private _value: string = '';

  public TextBoxFormControl: FormControl = new FormControl("TextBoxFormControl", [ManualValidator(this.IsValid)]);
  public TextBoxErrorStateMatcher: TextBoxErrorStateMatcher = new TextBoxErrorStateMatcher();
  @Input() public set Value(value: string) {
    this._value = value;
    this.TextBoxFormControl.setValue(value);
  }
  public get Value(): string {
    return this._value;
  }


  public get Type(): string {
    return this.Masked ? 'password' : 'text';
  }
}
