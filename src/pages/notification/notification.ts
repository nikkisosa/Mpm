import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { SessionsProvider } from "../../providers/sessions/sessions";
import { ServicesProvider } from "../../providers/services/services";
import Striptags from "striptags";
/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  data = [];
  holder:any;
  connection:any;
  connection_timeout:any;
  user_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private network: Network, private sessions: SessionsProvider, private services: ServicesProvider) {

  }

  
  ionViewDidLoad() {
    this.connection = 'true';
    this.user_id = this.sessions.get_local_user_id();
    this.services.user_notification(this.user_id)
      .then((result) => {
        this.holder = result;
        this.data = [];
        for (let i = 0; i < this.holder.announcement.length; i++) {
          this.data.push({ 'title': Striptags(this.holder.announcement[i].title), 'date': this.holder.announcement[i].date, 'message': Striptags(this.holder.announcement[i].message) });
        }
      })
      .catch(e => console.log(e));
    /* this.check_internet_connection();
    setInterval(()=>{
      if (this.connection == 'true') {
        console.log('no internet access :-(');
      } else if (this.connection == 'false') {
        this.services.user_notification(this.user_id)
          .then((result) => {
            this.data = result;
            console.log(this.data);
          })
          .catch(e => console.log(e));
      }
    },1000) */
    
  }

  ionViewDidLeave(){
    clearInterval(this.connection_timeout);
  }

  async check_internet_connection(){
    this.connection_timeout = await setInterval(()=>{
      console.log(this.connection);
      if (this.network.type == "ethernet" || this.network.type == "wifi" || this.network.type == "3g" || this.network.type == "4g" ){
        this.connection = 'true';
      }else if(this.network.type == "none"){
        this.connection = 'false';
      }
    },1000)
  }

}
