import {
  Component, ElementRef, EventEmitter, Input, Output
} from "@angular/core";
import {FormControl} from "@angular/forms";
import {ManualValidator} from "../Core/ManualValidator";
import {TextBoxErrorStateMatcher} from "../Core/TextBoxErrorStateMatcher";

@Component({
  selector: 'app-text-box[Value]',
  templateUrl: './TextBox.Template.html',
  //styleUrls: ['./TextBox.Styles.scss'],
})
export class TextBoxComponent {
  @Input() Placeholder: string = '';
  @Output('ValueChange') public ValueChange: EventEmitter<any> = new EventEmitter();
  @Input() Error: string = 'Invalid Input';
  @Input() Label: string = '';
  @Input() Masked: boolean = false;
  @Input() public IsDirty: boolean = false;
  @Input() public IsValid : boolean = false;

  constructor(private _elementRef: ElementRef) {}

  public TextBoxFormControl: FormControl = new FormControl(
    '',
    {
      updateOn: "change",
      validators: () => ManualValidator(this.IsValid)
    }
  );
  public TextBoxErrorStateMatcher: TextBoxErrorStateMatcher = new TextBoxErrorStateMatcher();
  onInput($event: Event): void {
    const inputElement = $event.target as HTMLInputElement;
    const value = inputElement.value;
    this.IsDirty = true;
    this.TextBoxFormControl.markAsDirty();
    this.TextBoxFormControl.markAsTouched();
    this.Value = value;
  }
  onBlur(): void {
    this.TextBoxFormControl.markAsTouched();
  }
  @Input() public set Value(value: string) {
    this.TextBoxFormControl.setValue(value);
    if (!this.IsValid) {
      this.TextBoxFormControl.setErrors({"Error": this.Error});
    } else {
      this.TextBoxFormControl.setErrors(null);
    }
    this.ValueChange.emit(value);
  }
  public get Value(): string {
    const value = this.TextBoxFormControl.getRawValue();
    return value;
  }

  public get Type(): string {
    return this.Masked ? 'password' : 'text';
  }
}
