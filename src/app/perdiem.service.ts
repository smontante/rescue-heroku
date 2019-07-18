import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerdiemService {

  gsaResults:any;

  url = "https://inventory.data.gov/api/action/datastore_search?resource_id="
  gsaApiKey = "8ea44bc4-22ba-4386-b84c-1494ab28964b";
  zip:any = "";
  city:String = "";
  state:String="";
  startMonth:String = "";
  endMonth:String = "";
  lodging:any;
  meals:any;
  estTotal:any;
  startDate:any; 
  endDate:any;
  postUrl = '/lodging';
  name:String;
  
    constructor(public http: HttpClient) { }

    getGsaData(){
      return this.http.get(this.url + this.gsaApiKey + '&filters={"FiscalYear":"2019","Zip":' + this.zip + ' }');
    }

    saveLodging() {
      console.log('name: ', this.name);
      console.log('start: ', this.startDate);
      console.log('end: ', this.endDate);
      console.log('lodging: ', this.lodging);
      console.log('meals: ', this.meals);
      console.log('totals: ', this.estTotal);
      this.http.post('/lodging', {
        name: this.name,
        lodging: this.lodging, 
        meals: this.meals, 
        total: this.estTotal
      }).subscribe( data => {
        console.log('data to post: ', data);
      });
    }
      
}
