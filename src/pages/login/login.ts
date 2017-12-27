import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//provider
import { CommonProvider } from "../../providers/common/common";
import { ServicesProvider } from "../../providers/services/services";
import { SessionsProvider } from "../../providers/sessions/sessions";
//page
import { HomePage } from "../home/home";
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:any;
  pass:any;
  info:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private common:CommonProvider,
    private services:ServicesProvider,
    private sessions:SessionsProvider) {
  }

  private async login(){
    this.common.activeLoading();
    await this.services.user_login(this.user, this.pass)
      .then((result) => {
        this.info = result;
        console.log(this.info);
        if (this.info.status == "success") {

          this.sessions.set_local_user_id(this.info.user[0].user_id);
          this.sessions.set_local_role(this.info.user[0].role);

          this.sessions.set_local_rfid(this.info.user_deposits[0].rfid);
          this.sessions.set_local_balance(this.info.user_deposits[0].balance);

          this.sessions.set_local_address(this.info.user_details[0].address);
          this.sessions.set_local_email(this.info.user_details[0].email);
          this.sessions.set_local_name(this.info.user_details[0].fullname);
          this.sessions.set_local_mobile(this.info.user_details[0].mobileno);
          this.sessions.set_local_student_class(this.info.user_details[0].class);
          this.sessions.set_local_student_section(this.info.user_details[0].section);
          this.sessions.set_local_image(this.info.user_details[0].image);
          this.navCtrl.setRoot(HomePage);
          this.common.closeLoading();
        }else{
          this.common.closeLoading();
          this.common.showAlert('Login','Please try again');
        }
      })
      .catch((e) => {
        console.log(e);
        this.common.closeLoading();
      });
  }

}
