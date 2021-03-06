import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { SplashPage } from "../pages/splash/splash";
import { ChangepasswordPage } from "../pages/changepassword/changepassword";
import { CategoryPage } from "../pages/category/category";
import { ContentPage } from "../pages/content/content";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = SplashPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}