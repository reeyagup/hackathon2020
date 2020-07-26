import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MajorDropdownComponent } from './major-dropdown/major-dropdown.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MajorDropdownComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, MatCardModule, BrowserAnimationsModule
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
