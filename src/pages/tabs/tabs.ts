import { Component } from '@angular/core';

import { DepositPage } from '../deposit/deposit';
import { LedgerPage } from '../ledger/ledger';
import { HistoryPage } from '../history/history';
import { ServicesProvider } from "../../providers/services/services";
import { SessionsProvider } from "../../providers/sessions/sessions";
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HistoryPage;
  tab2Root = DepositPage;
  tab3Root = LedgerPage;
  
  response:any;
  check:any = 'Inactive';
  timeout:any;
  constructor(
    private services:ServicesProvider,
    private sessions:SessionsProvider) {
    
  }

  ionViewDidLoad(){
    this.timeout = setInterval(() => {
      this.load();
    }, 50);
  }

  ionViewDidLeave(){
   clearInterval(this.timeout);
  this.sessions.unset_local_temp_deposits();
  }

  private async load(){
    await
      this.services.background_check_kiosk(this.sessions.get_local_rfid())
        .then((result) => {
          this.response = result;
          if(this.response.status == "success"){
            this.check = this.response.active;
            this.sessions.set_local_kiosk_active('Active');
            this.sessions.set_local_kiosk(this.response.kiosk);
            this.sessions.set_local_balance(this.response.balance[0].balance);
            this.sessions.set_local_amount(this.response.deposit);
          }else{
            this.sessions.set_local_kiosk_active('Inactive');
            this.check = this.sessions.get_local_kiosk_active();
            this.sessions.unset_local_kiosk();
            //this.sessions.unset_local_balance();
            this.sessions.unset_local_amount();
          }
          
      }).catch(e => console.log(e));
  }
}
