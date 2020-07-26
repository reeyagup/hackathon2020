import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MajorDropdownComponent } from './major-dropdown/major-dropdown.component';


const routes: Routes = [
 // { path: 'coding-languages', component: LanguageInfoComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
