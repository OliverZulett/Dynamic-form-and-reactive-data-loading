import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { MockApiService } from './services/mock-api.service';
import { ApiService } from './services/api.service';

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
    MockApiService,
    ApiService
  ]
})
export class CollaboratorsModule { }
