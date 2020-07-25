import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MajorDropdownComponent } from './major-dropdown/major-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MajorDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
