import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SessionsProvider } from "../../providers/sessions/sessions";
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  data: any;
  balance:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sessions: SessionsProvider) {
  }

  ionViewDidLoad() {
    //this.sessions.set_local_deposits('100', '2017-20-12', '4:31', 'PrototypeC');
    this.balance = this.sessions.get_local_balance();
    this.data = JSON.parse(this.sessions.get_local_deposits());
    
  }

}
