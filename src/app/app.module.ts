import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollaboratorsModule } from './collaborators/collaborators.module';
import { DynamicformModule } from './dynamicform/dynamicform.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollaboratorsModule,
    DynamicformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
