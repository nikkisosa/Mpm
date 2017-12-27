import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";
import { SessionsProvider } from "../../providers/sessions/sessions";



@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  name:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sessions:SessionsProvider) {
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.name = this.sessions.get_local_name();
      if (this.name == "undefined") {
        this.navCtrl.setRoot(LoginPage);
      } else if (this.name == null) {
        this.navCtrl.setRoot(LoginPage);
      } else if (this.name == "") {
        this.navCtrl.setRoot(LoginPage);
      } else if (this.name != null) {
        this.navCtrl.setRoot(HomePage);
      }
    },1000);
  }

}
