import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AyahPage } from './ayah-page';

@NgModule({
  declarations: [
    AyahPage,
  ],
  imports: [
    IonicPageModule.forChild(AyahPage),
  ],
  exports: [
    AyahPage
  ]
})
export class AyahPageModule {}
