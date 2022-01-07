import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './components/dynamic-form-field/dynamic-form-field.component';



@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormFieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicformModule { }
