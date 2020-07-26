import { Component, OnInit } from '@angular/core';
import { MAJORS } from '../majorList';
import { major } from '../major';


@Component({
  selector: 'app-major-dropdown',
  templateUrl: './major-dropdown.component.html',
  styleUrls: ['./major-dropdown.component.css']
})


export class MajorDropdownComponent implements OnInit {

  majors = MAJORS;

  constructor() { }

  ngOnInit(): void {
  }

  filterForMajor(majorObject: major) {
   for(let i = 0; i < majorObject.languages.length; i ++) {
     console.log(majorObject.languages[i].name + ' ' + majorObject.languages[i].description);
   }    
  }


 /* 
<!--  filterForeCasts(filterVal: any) {
        if (filterVal == "0")
            this.forecasts = this.cacheForecasts;
        else
        this.forecasts = this.cacheForecasts.filter((item) => item.summary == filterVal);
    }-->*/

  

}
