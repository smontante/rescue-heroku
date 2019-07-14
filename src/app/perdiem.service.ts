import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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
  
    constructor(public http: HttpClient) { }

    getGsaData(){
      //return this.http.get(this.url + this.gsaApiKey);
      return this.http.get(this.url + this.gsaApiKey + '&filters={"FiscalYear":"2019","Zip":' + this.zip + ' }');
    }

    
  
}
