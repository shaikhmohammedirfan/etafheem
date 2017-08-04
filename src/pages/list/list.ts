import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SdataService } from '../../providers/sdata-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  surahdata: any;
  sname: any;
  totvers: any;
varray;
narray = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public sdataservice: SdataService) {
   
    this.totvers = this.navParams.get('TotVerse');
      alert(this.totvers);
     this.sname = this.navParams.get('SurahName');
    let sno = this.navParams.get('Sno');
          

this.getSurahData(sno);

}


getSurahData(sno){
// alert(sno);
  this.sdataservice.getSurahData(sno).subscribe(data => this.surahdata = data);

}

   openAyah(ayah) {

     let ano = ayah.VerseNo;


     let atxt = ayah.ArabicText;
     let etran = ayah.EnglishTranslation;
     let cmt = ayah.Comments;


//  alert('verse no here:' + ano);
//  alert('atext:' + atxt);
// alert('translation:' + etran);
// alert('Comments:' + cmt);

this.navCtrl.push('AyahPage',{ayah: ano,atxt,etran,cmt});
   };

}
  
  // itemTapped(event, item) {
  
  //   this.navCtrl.push('AyahPage', item  
  // );
  
 
  
  // }

// loadIntro(event, item) {
     
//     this.navCtrl.push('AyahPage', {
//       item: "Ayah 0"
//     });
   
//   }




