import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { MockApiService } from './services/mock-api.service';

@NgModule({
  declarations: [
    CollaboratorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CollaboratorsComponent
  ],
  providers: [
    MockApiService
  ]
})
export class CollaboratorsModule { }
