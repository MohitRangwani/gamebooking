import { Injectable } from '@angular/core';
import { Location } from './location.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class LocationService{


constructor(public http:HttpClient){
 
}
getLocation():Observable<HttpResponse<Location[]>>  {
  return this.http.get<Location[]>('http://localhost:3000/api/location/',{observe:'response'});
  
  
}
selectedLocation:String;
selLocation(loc : String){
this.selectedLocation=loc;
}
}