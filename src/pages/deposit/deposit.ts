import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SessionsProvider } from "../../providers/sessions/sessions";
import { ServicesProvider } from "../../providers/services/services";
/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage {

  kiosk:any = 'none';
  amount:any = '0';
  data:any;
  timeout:any;
  status:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sessions:SessionsProvider,
    private services:ServicesProvider) {
  }

  ionViewDidLoad() {
    this.load();
  }

  load(){
    this.timeout = setInterval(() => {
      this.status = this.sessions.get_local_kiosk_active();
      //console.log(this.status);
      if (this.status == "Active") {
        this.kiosk = this.sessions.get_local_kiosk();
        this.amount = this.sessions.get_local_amount();

        this.services.user_current_deposit(this.sessions.get_local_rfid())
        .then((result)=>{
          let temp:any = result;
          if(temp.status == "success"){
            this.sessions.set_local_temp_deposits(temp.deposits[0].deposit, temp.deposits[0].date, temp.deposits[0].time, temp.kiosk);
            this.sessions.set_local_deposits(temp.deposits[0].deposit, temp.deposits[0].date, temp.deposits[0].time, temp.kiosk);
            this.data = JSON.parse(this.sessions.get_local_temp_deposits());
          }else{
            
          }
          
        })
        .catch(e => console.log(e));
      } else {
        this.kiosk = 'none';
        this.amount = '0';
        this.sessions.unset_local_temp_deposits();
        this.sessions.unset_local_amount();
      }
    }, 50);
  }

  ionViewDidLeave(){
   clearInterval(this.timeout);
  }

}
