import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SdataService } from '../../providers/sdata-service';


@IonicPage({
segment: 'AyahPage/:item'
})
@Component({
  selector: 'page-ayah-page',
  templateUrl: 'ayah-page.html',
})
export class AyahPage {
  ayahdata: any;
  atext: any;
  cmt: any;
  etran: any;
  surahno: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public sdataservice: SdataService) {

this.surahno =this.navParams.get('ayah');
this.atext = this.navParams.get('atxt')
this.etran = this.navParams.get('etran')
this.cmt = this.navParams.get('cmt')
//  alert(this.surahno);
//  alert(this.atext);
//  alert(this.etran);
//  alert(this.cmt);
// this.ayahno = this.navParams.get('title');
// this.surahno = this.navParams.get('sno');



// this.sdataservice.getByIDs2(this.surahno).then(result => {
// this.ayahdata = result;

// this.atext = this.ayahdata.ArabicText;
// this.cmt = this.ayahdata.Comments;
// this.etran = this.ayahdata.EnglishTranslation;
// })


  }

}

