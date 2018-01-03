import { NgModule, ErrorHandler, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, } from 'ionic-angular';
import { Http,HttpModule } from "@angular/http";
import { MyApp } from './app.component';
import { Network } from '@ionic-native/network';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { DepositPage } from "../pages/deposit/deposit";
import { HistoryPage } from "../pages/history/history";
import { LedgerPage } from "../pages/ledger/ledger";
import { LoginPage } from "../pages/login/login";
import { NotificationPage } from "../pages/notification/notification";
import { SettingsPage } from "../pages/settings/settings";
import { ChangepasswordPage } from "../pages/changepassword/changepassword";
import { SplashPage } from "../pages/splash/splash";
import { TransactionPage } from "../pages/transaction/transaction";
import { ServicesProvider } from '../providers/services/services';
import { CommonProvider } from '../providers/common/common';
import { SessionsProvider } from '../providers/sessions/sessions';
import { CategoryPage } from "../pages/category/category";
import { ContentPage } from "../pages/content/content";
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DepositPage,
    HistoryPage,
    LedgerPage,
    LoginPage,
    NotificationPage,
    SettingsPage,
    SplashPage,
    TransactionPage,
    ChangepasswordPage,
    CategoryPage,
    ContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false }), HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DepositPage,
    HistoryPage,
    LedgerPage,
    LoginPage,
    NotificationPage,
    SettingsPage,
    SplashPage,
    TransactionPage,
    ChangepasswordPage,
    CategoryPage,
    ContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesProvider,
    CommonProvider,
    HttpModule,
    SessionsProvider, Network,
  ]
})
export class AppModule {}
