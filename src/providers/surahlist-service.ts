import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class SurahlistService {

surahlist: any;
  constructor(private http: Http) {
    
 
  }

getSurahList(){
  let dpath = 'assets/data/surahlist.json';
  return this.http.get(dpath)
  .do(this.logResponse)
  .map(this.extractData)
  .do(this.logResponse)
  .catch(this.catchError)

}




private logResponse( res: Response){
  console.log(res);
}

private extractData(res: Response){
  return res.json();
}

private catchError(error: Response | any){
  console.log(error);
  return Observable.throw(error.json().error || "Server error.");

}

}
