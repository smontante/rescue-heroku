import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { PerdiemService } from '../perdiem.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.css']
})

export class LodgingComponent implements OnInit {
  
  gsaResults:any = {}; 
  startEndRate:any = 0.75; //75% of start and
  diff:any;


  constructor(public perdiem$:PerdiemService, public http: HttpClient) { }
  
  ngOnInit() {

  }

  searchZip(){
    this.perdiem$.getGsaData().subscribe( data => {
      this.gsaResults = data;
      this.perdiem$.lodging = Number(this.gsaResults.result.records[0].Jul); 
      this.perdiem$.meals = Number(this.gsaResults.result.records[0].Meals);
      this.perdiem$.estTotal = this.perdiem$.lodging + this.perdiem$.meals;
      this.perdiem$.saveLodging();
    });

  }

  parseDate(){
    let newStartDateArr;
    let newEndDateArr;
    let newStartDateStr;
    let newEndDateStr;
    let dayDiff;

    //start and end date array from input of dates
    newStartDateArr = this.perdiem$.startDate.split("-");
    newEndDateArr = this.perdiem$.endDate.split("-");
      // console.log('this is the start date array: ', newStartDateArr);
      // console.log('this is the end date array: ', newEndDateArr);

    //array being converted to string 
    newStartDateStr = new Date(newStartDateArr[0], newStartDateArr[1]-2, newStartDateArr[2]);
    newEndDateStr = new Date(newEndDateArr[0], newEndDateArr[1]-2, newEndDateArr[2]);
      // console.log('this is the start date string: ', new Date(newStartDateArr[0], newStartDateArr[1]-2, newStartDateArr[2]));
      // console.log('this is the end date array: ', new Date(newEndDateArr[0], newEndDateArr[1]-2, newEndDateArr[2]));

    //calculations on date differences
    dayDiff = Math.round((newEndDateStr-newStartDateStr)/(1000*60*60*24));
      // console.log('the difference is days are:', dayDiff);

    //return final difference in days
    return dayDiff;
  }

  //passes difference in days to results component
  passDayDiff(){
    this.diff = this.parseDate();
    // console.log("this is the passDayDiff() result: ", this.diff);
      return this.diff = this.parseDate();
  }


}





/* ERRORS AND BOILER PLATE 
ERROR: split error because you dont have a date passed yet SOLUTION:use functional patterns to pass values
ERROR: Math.Round(()) wont work because values are strings SOLUTION: change the value from string to int
parseDateStart:any = this.parseDate(this.startDate);
parseDateEnd:any = this.parseDate(this.endDate);
dateDiff = Math.round((this.parseDateEnd - this.parseDateStart)/(1000 * 60 * 60 *24))
*/ 

