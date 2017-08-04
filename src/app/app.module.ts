import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { MainIntro } from '../pages/main-intro/main-intro';
import { About } from '../pages/about/about';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


 import { SurahlistService } from '../providers/surahlist-service';
 import { SdataService } from '../providers/sdata-service';
 import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    About,
    MainIntro,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,About,
    MainIntro,
    TabsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, SurahlistService,SdataService
  ]
})
export class AppModule {}
