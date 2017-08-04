import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class SdataService {
s1data: any;
s2data: any;

sdata: any;

  constructor(public http: Http) {

}

getDTLintro(){
  
  return this.http.get('assets/data/mainIntro.json')
  .do(this.logResponse)
  .map(this.extractData)
  .do(this.logResponse)
  .catch(this.catchError)

}
getSurahData(sno){
  // let fname = 'assets/data/' + sno + 's.json';
  // alert(fname);


  let dpath = 'assets/data/'+ sno + 'data.json';
  
  return this.http.get(dpath)
  .do(this.logResponse)
  .map(this.extractData)
  .do(this.logResponse)
  .catch(this.catchError)

}


getSurahDataByID(id) {
  
  let dat = this.s1data
  // this.s1data[i].VerseNo == id;
  // alert(this.s1data[i].ArabicText);
  // console.log(this.s1data[i]);

  for(var i=0; i<(dat).length; i++)
  {
    if(dat[i].VerseNo == id)
  return Promise.resolve(dat[id]);  
}
    
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

