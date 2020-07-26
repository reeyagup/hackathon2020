import { Component, OnInit } from '@angular/core';
import { MAJORS } from '../majorList';
import { language } from '../language';
import { FormsModule } from '@angular/forms';
import {languages} from '../majorArray';

@Component({
  selector: 'app-major-dropdown',
  templateUrl: './major-dropdown.component.html',
  styleUrls: ['./major-dropdown.component.css']
})


export class MajorDropdownComponent implements OnInit {

  selectedMajor: string;
  majorsList = MAJORS;
  languageList = languages;
  description: string;

  constructor() { }

  ngOnInit() {
  }

  onSelectedMajor(name: string) {

    for(let i = 0; i < this.languageList.length; i ++)
    if(name == this.languageList[i].major) {
      console.log(this.languageList[i]);
      this.description = this.languageList[i].description;
    }

    

  }

}
