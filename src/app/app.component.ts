import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs-page/tabs-page';

 import {SurahlistService } from '../providers/surahlist-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
surahlist: any[];
items;

  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public surahlistService: SurahlistService) {
    this.initializeApp();
    this.initializeItems();
    // this.getSurahList();
 
  }


// getSurahList(){
//  this.surahlistService.getSurahList().subscribe(data => this.surahlist = data); 
// }

initializeItems() {
  this.items =   [
    {
      "Sno": "1",
      "SurahName": "Al-Fatihah",
      "TotVerse": "            07"
    },
    {
      "Sno": "2",
      "SurahName": "Al-Baqarah",
      "TotVerse": "            286"
    },
    {
      "Sno": "3",
      "SurahName": "Aal-`Imran",
      "TotVerse": "            200"
    },
    {
      "Sno": "4",
      "SurahName": "An-Nisa",
      "TotVerse": "            176"
    },
    {
      "Sno": "5",
      "SurahName": "Al-Ma`idah",
      "TotVerse": "            120"
    },
    {
      "Sno": "6",
      "SurahName": "Al-An`am",
      "TotVerse": "            165"
    },
    {
      "Sno": "7",
      "SurahName": "Al-A`raf",
      "TotVerse": "            206"
    },
    {
      "Sno": "8",
      "SurahName": "Al-Anfal",
      "TotVerse": "            75"
    },
    {
      "Sno": "9",
      "SurahName": "At-Taubah",
      "TotVerse": "            129"
    },
    {
      "Sno": "10",
      "SurahName": "Yunus",
      "TotVerse": "            109"
    },
    {
      "Sno": "11",
      "SurahName": "Hud",
      "TotVerse": "            123"
    },
    {
      "Sno": "12",
      "SurahName": "Yusuf",
      "TotVerse": "            111"
    },
    {
      "Sno": "13",
      "SurahName": "Ar-Ra`ad",
      "TotVerse": "            43"
    },
    {
      "Sno": "14",
      "SurahName": "Ibrahim",
      "TotVerse": "            52"
    },
    {
      "Sno": "15",
      "SurahName": "Al-Hijr",
      "TotVerse": "            99"
    },
    {
      "Sno": "16",
      "SurahName": "An-Nahl",
      "TotVerse": "            128"
    },
    {
      "Sno": "17",
      "SurahName": "Al-Isra",
      "TotVerse": "            111"
    },
    {
      "Sno": "18",
      "SurahName": "Al-Kahf",
      "TotVerse": "            110"
    },
    {
      "Sno": "19",
      "SurahName": "Maryam",
      "TotVerse": "            98"
    },
    {
      "Sno": "20",
      "SurahName": "Ta Ha",
      "TotVerse": "            135"
    },
    {
      "Sno": "21",
      "SurahName": "Al-Anbiyaa",
      "TotVerse": "            112"
    },
    {
      "Sno": "22",
      "SurahName": "Al-Hajj",
      "TotVerse": "            78"
    },
    {
      "Sno": "23",
      "SurahName": "Al-Mu`minun",
      "TotVerse": "            118"
    },
    {
      "Sno": "24",
      "SurahName": "An-Nur",
      "TotVerse": "            64"
    },
    {
      "Sno": "25",
      "SurahName": "Al-Furqan",
      "TotVerse": "            77"
    },
    {
      "Sno": "26",
      "SurahName": "Ash-Shu`ara",
      "TotVerse": "            227"
    },
    {
      "Sno": "27",
      "SurahName": "An-Naml",
      "TotVerse": "            93"
    },
    {
      "Sno": "28",
      "SurahName": "Al-Qasas",
      "TotVerse": "            88"
    },
    {
      "Sno": "29",
      "SurahName": "Al-Ankabut",
      "TotVerse": "            69"
    },
    {
      "Sno": "30",
      "SurahName": "Ar-Rum",
      "TotVerse": "            60"
    },
    {
      "Sno": "31",
      "SurahName": "Luqman",
      "TotVerse": "            34"
    },
    {
      "Sno": "32",
      "SurahName": "As-Sajdah",
      "TotVerse": "            30"
    },
    {
      "Sno": "33",
      "SurahName": "Al-Ahzab",
      "TotVerse": "            73"
    },
    {
      "Sno": "34",
      "SurahName": "Saba",
      "TotVerse": "            54"
    },
    {
      "Sno": "35",
      "SurahName": "Fatir",
      "TotVerse": "            45"
    },
    {
      "Sno": "36",
      "SurahName": "Ya-Sin",
      "TotVerse": "            83"
    },
    {
      "Sno": "37",
      "SurahName": "As-Saffaat",
      "TotVerse": "            182"
    },
    {
      "Sno": "38",
      "SurahName": "Saad",
      "TotVerse": "            88"
    },
    {
      "Sno": "39",
      "SurahName": "Az-Zumar",
      "TotVerse": "            75"
    },
    {
      "Sno": "40",
      "SurahName": "Ghafir",
      "TotVerse": "            85"
    },
    {
      "Sno": "41",
      "SurahName": "Fussilat",
      "TotVerse": "            54"
    },
    {
      "Sno": "42",
      "SurahName": "Ash-Shura",
      "TotVerse": "            53"
    },
    {
      "Sno": "43",
      "SurahName": "Az-Zukhruf",
      "TotVerse": "            89"
    },
    {
      "Sno": "44",
      "SurahName": "Ad-Dukhan",
      "TotVerse": "            59"
    },
    {
      "Sno": "45",
      "SurahName": "Al-Jathiyah",
      "TotVerse": "            37"
    },
    {
      "Sno": "46",
      "SurahName": "Al-Ahqaf",
      "TotVerse": "            35"
    },
    {
      "Sno": "47",
      "SurahName": "Muhammad",
      "TotVerse": "            38"
    },
    {
      "Sno": "48",
      "SurahName": "Al-Fath",
      "TotVerse": "            29"
    },
    {
      "Sno": "49",
      "SurahName": "Al-Hujuraat",
      "TotVerse": "            18"
    },
    {
      "Sno": "50",
      "SurahName": "Qaf",
      "TotVerse": "            45"
    },
    {
      "Sno": "51",
      "SurahName": "Adh-Dhariyat",
      "TotVerse": "            60"
    },
    {
      "Sno": "52",
      "SurahName": "At-Tur",
      "TotVerse": "            49"
    },
    {
      "Sno": "53",
      "SurahName": "An-Najm",
      "TotVerse": "            62"
    },
    {
      "Sno": "54",
      "SurahName": "Qamar",
      "TotVerse": "            55"
    },
    {
      "Sno": "55",
      "SurahName": "Ar-Rahman",
      "TotVerse": "            78"
    },
    {
      "Sno": "56",
      "SurahName": "Al-Waqi`ah",
      "TotVerse": "            96"
    },
    {
      "Sno": "57",
      "SurahName": "Al-Hadid",
      "TotVerse": "            29"
    },
    {
      "Sno": "58",
      "SurahName": "Al-Mujadilah",
      "TotVerse": "            22"
    },
    {
      "Sno": "59",
      "SurahName": "Al-Hashr",
      "TotVerse": "            24"
    },
    {
      "Sno": "60",
      "SurahName": "Al-Mumtahinah",
      "TotVerse": "            13"
    },
    {
      "Sno": "61",
      "SurahName": "As-Saff",
      "TotVerse": "            14"
    },
    {
      "Sno": "62",
      "SurahName": "Al-Jumu`ah",
      "TotVerse": "            11"
    },
    {
      "Sno": "63",
      "SurahName": "Al-Munafiqun",
      "TotVerse": "            11"
    },
    {
      "Sno": "64",
      "SurahName": "At-Taghabun",
      "TotVerse": "            18"
    },
    {
      "Sno": "65",
      "SurahName": "At-Talaaq",
      "TotVerse": "            12"
    },
    {
      "Sno": "66",
      "SurahName": "At-Tahrim",
      "TotVerse": "            12"
    },
    {
      "Sno": "67",
      "SurahName": "Al-Mulk",
      "TotVerse": "            30"
    },
    {
      "Sno": "68",
      "SurahName": "Al-Qalam",
      "TotVerse": "            52"
    },
    {
      "Sno": "69",
      "SurahName": "Al-Haqqah",
      "TotVerse": "            52"
    },
    {
      "Sno": "70",
      "SurahName": "Al-Ma`arij",
      "TotVerse": "            44"
    },
    {
      "Sno": "71",
      "SurahName": "Nuh",
      "TotVerse": "            28"
    },
    {
      "Sno": "72",
      "SurahName": "Al-Jinn",
      "TotVerse": "            28"
    },
    {
      "Sno": "73",
      "SurahName": "Al-Muzzammil",
      "TotVerse": "            20"
    },
    {
      "Sno": "74",
      "SurahName": "Al-Muddathir",
      "TotVerse": "            56"
    },
    {
      "Sno": "75",
      "SurahName": "Al-Qiyamah",
      "TotVerse": "            40"
    },
    {
      "Sno": "76",
      "SurahName": "Al-Insan",
      "TotVerse": "            31"
    },
    {
      "Sno": "77",
      "SurahName": "Al-Mursalaat",
      "TotVerse": "            50"
    },
    {
      "Sno": "78",
      "SurahName": "An-Naba",
      "TotVerse": "            40"
    },
    {
      "Sno": "79",
      "SurahName": "An-Nazi`aat",
      "TotVerse": "            46"
    },
    {
      "Sno": "80",
      "SurahName": "Abasa",
      "TotVerse": "            42"
    },
    {
      "Sno": "81",
      "SurahName": "At-Takwir",
      "TotVerse": "            29"
    },
    {
      "Sno": "82",
      "SurahName": "Al-Infitaar",
      "TotVerse": "            19"
    },
    {
      "Sno": "83",
      "SurahName": "Al-Mutaffifin",
      "TotVerse": "            36"
    },
    {
      "Sno": "84",
      "SurahName": "Al-Inshiqaq",
      "TotVerse": "            25"
    },
    {
      "Sno": "85",
      "SurahName": "Al-Burooj",
      "TotVerse": "            22"
    },
    {
      "Sno": "86",
      "SurahName": "At-Tariq",
      "TotVerse": "            17"
    },
    {
      "Sno": "87",
      "SurahName": "Al-A`la",
      "TotVerse": "            19"
    },
    {
      "Sno": "88",
      "SurahName": "Al-Ghaashiyah",
      "TotVerse": "            26"
    },
    {
      "Sno": "89",
      "SurahName": "Al-Fajr",
      "TotVerse": "            30"
    },
    {
      "Sno": "90",
      "SurahName": "Al-Balad",
      "TotVerse": "            20"
    },
    {
      "Sno": "91",
      "SurahName": "Ash-Shams",
      "TotVerse": "            15"
    },
    {
      "Sno": "92",
      "SurahName": "Al-Lail",
      "TotVerse": "            21"
    },
    {
      "Sno": "93",
      "SurahName": "Ad-Duha",
      "TotVerse": "            11"
    },
    {
      "Sno": "94",
      "SurahName": "Ash-Sharh",
      "TotVerse": "            08"
    },
    {
      "Sno": "95",
      "SurahName": "At-Tin",
      "TotVerse": "            08"
    },
    {
      "Sno": "96",
      "SurahName": "Al-Alaq",
      "TotVerse": "            19"
    },
    {
      "Sno": "97",
      "SurahName": "Al-Qadr",
      "TotVerse": "            05"
    },
    {
      "Sno": "98",
      "SurahName": "Al-Baiyyinah",
      "TotVerse": "            08"
    },
    {
      "Sno": "99",
      "SurahName": "Az-Zalzalah",
      "TotVerse": "            08"
    },
    {
      "Sno": "100",
      "SurahName": "Al-Aadiyaat",
      "TotVerse": "            11"
    },
    {
      "Sno": "101",
      "SurahName": "Al-Qari`ah",
      "TotVerse": "            11"
    },
    {
      "Sno": "102",
      "SurahName": "At-Takaathur",
      "TotVerse": "            08"
    },
    {
      "Sno": "103",
      "SurahName": "Al-Asr",
      "TotVerse": "            03"
    },
    {
      "Sno": "104",
      "SurahName": "Al-Humazah",
      "TotVerse": "            09"
    },
    {
      "Sno": "105",
      "SurahName": "Al-Feel",
      "TotVerse": "            05"
    },
    {
      "Sno": "106",
      "SurahName": "Quraish",
      "TotVerse": "            04"
    },
    {
      "Sno": "107",
      "SurahName": "Al-Maa`oon",
      "TotVerse": "            07"
    },
    {
      "Sno": "108",
      "SurahName": "Al-Kauthar",
      "TotVerse": "            03"
    },
    {
      "Sno": "109",
      "SurahName": "Al-Kaafiroon",
      "TotVerse": "            06"
    },
    {
      "Sno": "110",
      "SurahName": "An-Nasr",
      "TotVerse": "            03"
    },
    {
      "Sno": "111",
      "SurahName": "Al-Masad",
      "TotVerse": "            05"
    },
    {
      "Sno": "112",
      "SurahName": "Al-Ikhlaas",
      "TotVerse": "            04"
    },
    {
      "Sno": "113",
      "SurahName": "Al-Falaq",
      "TotVerse": "            05"
    },
    {
      "Sno": "114",
      "SurahName": "An-Naas",
      "TotVerse": "            06"
    }
  ];

}


getItems(ev) {

    // Reset items back to all of the items

    this.initializeItems();



    // set val to the value of the ev target

    var val = ev.target.value;



    // if the value is an empty string don't filter the items

   if (val && val.trim() != '') {

      this.items = this.items.filter((items) => {

        return (items.SurahName.toLowerCase().indexOf(val.toLowerCase()) > -1);

      })

    }

  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

openHomePage(){
  this.nav.setRoot(TabsPage);
}

  openPage(surah) {
  
// alert(surah.SurahName);
    this.nav.setRoot(ListPage,surah);
    console.log(surah);
  }
}
