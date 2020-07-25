import { Component, OnInit } from '@angular/core';
import { language } from '../languages';
import { major } from '../majors';

@Component({
  selector: 'app-major-dropdown',
  templateUrl: './major-dropdown.component.html',
  styleUrls: ['./major-dropdown.component.css']
})
export class MajorDropdownComponent implements OnInit {

  majorList: major [];

  constructor() { }

  ngOnInit(): void {
  }



  majorMap = new Map<major, language[]>();
  
  setList() {

    const sociology = new major();
  
    sociology.name = 'sociology';


    const R = new language();
    R.description = 'good for dataScience';
    const Java = new language();
    Java.description = 'good for beginners';

    const biology = new major();
    biology.name = 'biology';

    this.majorList.push(sociology, biology);

    this.majorMap.set(sociology, [R, Java]);

    

  


  }

 

  

}
