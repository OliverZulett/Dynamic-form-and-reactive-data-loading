import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss']
})
export class DynamicFormFieldComponent{

  @Input() id!: string;
  @Input() title!: string;
  @Input() type!: string;
  @Input() value!: string;
  
  @Output() onBlurEmitted = new EventEmitter<string>();
  
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control;
  }

  onBlur() {
    console.log('onBlur emitted from child component');
    this.onBlurEmitted.emit(`onBlur emitted from item: ${this.id}`);
  }

}
