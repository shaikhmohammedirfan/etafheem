import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailINTRO } from './detail-intro';

@NgModule({
  declarations: [
    DetailINTRO,
  ],
  imports: [
    IonicPageModule.forChild(DetailINTRO),
  ],
  exports: [
    DetailINTRO
  ]
})
export class DetailINTROModule {}


