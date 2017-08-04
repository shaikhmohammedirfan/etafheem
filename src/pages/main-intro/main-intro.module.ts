import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainIntro } from './main-intro';

@NgModule({
  declarations: [
    MainIntro,
  ],
  imports: [
    IonicPageModule.forChild(MainIntro),
  ],
  exports: [
    MainIntro
  ]
})
export class MainIntroModule {}
