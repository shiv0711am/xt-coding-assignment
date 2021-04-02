import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {RootObject} from '../model/response.model';
@Injectable({
  providedIn: 'root'
})
export class ApicallService{
  constructor(private httpClient : HttpClient){

  }
  getData(){
    return this.httpClient.get<RootObject[]>("https://api.spaceXdata.com/v3/launches?limit=100")
    .pipe(
      map((data : RootObject[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    );
  }

  getLaunchSuccessData(){
    return this.httpClient.get<RootObject[]>("https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=true")
    .pipe(
      map((data : RootObject[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    );
  }

  getLaunchAndLandSuccessData(){
    return this.httpClient.get<RootObject[]>("https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true")
    .pipe(
      map((data : RootObject[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    );
  }

  getAllData(){
    return this.httpClient.get<RootObject[]>("https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014")
    .pipe(
      map((data : RootObject[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    );
  }
}
