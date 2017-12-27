import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { SessionsProvider } from "../../providers/sessions/sessions";
import { ChangepasswordPage } from "../changepassword/changepassword";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private sessions: SessionsProvider) {
  }

  logout(){
    this.sessions.unset_all();
    this.navCtrl.setRoot(LoginPage);
  }
 page(pages:any){
   switch (pages) {
     case "change password":
       this.navCtrl.push(ChangepasswordPage);
       break;
   
     default:
       break;
   }
 }
}
