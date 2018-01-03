import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Network } from '@ionic-native/network';
//provider
import { SessionsProvider } from "../../providers/sessions/sessions";
import { ServicesProvider } from "../../providers/services/services";
//page
import { NotificationPage } from "../notification/notification";
import { TabsPage } from "../tabs/tabs";
import { SettingsPage } from "../settings/settings";
import { CategoryPage } from "../category/category";
import { map } from 'rxjs/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  name:any;
  address:any;
  email:any;
  student_class:any;
  student_section:any;
  mobileno:any;
  image:any;
  user_id:any;
  announcement:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sessions:SessionsProvider,
    private services:ServicesProvider,
    private network:Network) {
  }

  ionViewDidLoad(){
   this.name = this.sessions.get_local_name();
   this.address = this.sessions.get_local_address();
   this.email = this.sessions.get_local_email();
   this.student_class = this.sessions.get_local_student_class();
   this.student_section = this.sessions.get_local_student_section();
   this.mobileno = this.sessions.get_local_mobile();
   this.user_id = this.sessions.get_local_user_id();
   this.image = 'http://192.168.1.2/overschool/'+this.sessions.get_local_image();
  }

  pages(page:any){
    switch (page) {
      case "notification":
        this.navCtrl.push(NotificationPage);
        break;

      case "tabs":
        this.navCtrl.push(TabsPage);
        break;

      case "donations":
      this.navCtrl.push(CategoryPage);
        break;  

      case "settings":
        this.navCtrl.push(SettingsPage);
        break;

      default:
        break;
    }
  }


}
