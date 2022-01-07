import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormFieldModel } from '../../models/dynamic-form-field.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  dynamicForm!: FormGroup;
  dynamicFormFields!: DynamicFormFieldModel[];
  onBlurEmittedMessage!: string;

  constructor(private fb: FormBuilder) {
    this.dynamicFormFields = [
      {
        id: '1',
        title: 'First Name',
        type: 'input-text',
      },
      {
        id: '2',
        title: 'Last Name',
        type: 'input-text',
      },
      {
        id: '3',
        title: 'Date of Birth',
        type: 'date',
      },
      {
        id: '4',
        title: 'Gender',
        type: 'radio',
        values: ['Male', 'Female', 'Non-binary'],
      },
    ];
  }

  ngOnInit(): void {
    this.dynamicForm = this.fb.group({});
    this.dynamicFormFields.forEach((formItem) => {
      const formControl = this.fb.control(null);
      this.dynamicForm.addControl(formItem.id, formControl);
    });
  }

  onBlurEmittedFromChildren(message: string) {
    this.onBlurEmittedMessage = message;
  }
}
