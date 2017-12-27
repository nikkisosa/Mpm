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
    this.get_announcement();
  }

  pages(page:any){
    switch (page) {
      case "notification":
        this.navCtrl.push(NotificationPage);
        break;

      case "tabs":
        this.navCtrl.push(TabsPage);
        break;

      case "settings":
        this.navCtrl.push(SettingsPage);
        break;
      default:
        break;
    }
  }

  get_announcement(){
    this.services.user_notification(this.user_id)
    .then((result)=>{
      this.announcement = result||[];
      let data:any = JSON.parse(this.sessions.get_local_announcement());
      let a: any = JSON.parse(JSON.stringify(this.announcement));
      console.log(data);
      if(data == "undefined" || data == null){
        
        Object.keys(a).forEach((key) => {
          console.log(a[key]);
        });
        
        /* announcement.forEach((el, i) => {
          //this.sessions.set_local_announcement(this.announcement.announcement[0].title, this.announcement.announcement[0].message, this.announcement.announcement[0].date);
        }); */
        
      } else {
        data.forEach((element, i) => {
          console.log(element[i].title)
          if (this.announcement.announcement[0].title == element[i].title) {

          } else {
            this.announcement.forEach((el, i) => {
              console.log(el[i]);
              this.sessions.set_local_announcement(this.announcement.announcement[0].title, this.announcement.announcement[0].message, this.announcement.announcement[0].date);
            });
          }
        });
      }
      
    })
    .catch(e=>console.log(e));
  }


}
