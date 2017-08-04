import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SdataService } from '../../providers/sdata-service';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-detail-intro',
  templateUrl: 'detail-intro.html',
})
export class DetailINTRO {
  introDTL;

 @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sdataservice: SdataService) {
    this.getDTLintro();
    
  }

  
slideToNext() {
   this.slides.slideNext(); 
  }


slideToPrev() {
   this.slides.slidePrev(); 
  }

getDTLintro(){

  this.sdataservice.getDTLintro().subscribe(data => this.introDTL = data);
  
}

}
