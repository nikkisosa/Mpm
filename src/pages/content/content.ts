import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { SessionsProvider } from "../../providers/sessions/sessions";
import { CommonProvider } from "../../providers/common/common";
/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  title:any;
  subtitle:any;
  content:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private sessions: SessionsProvider, 
    private alertCtrl:AlertController,
    private common:CommonProvider) {
  }

  ionViewDidLoad() {
    let a:any = JSON.parse(this.sessions.get_local_donation());
    this.title = a.title;
    this.subtitle = a.subtitle;
    this.content = a.content;
  }

  donate(){
    let prompt = this.alertCtrl.create({
      title: 'Donate',
      message: "Enter you're donation",
      inputs: [
        {
          name: 'amount',
          placeholder: 'Amount',
          type: 'number'
        },
      ],  
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
         
          handler: data => {
            if (data.amount == '' || data.amount == 0 || data.amount == '0'){
              this.common.showAlert('Error','Invalid amount');
            }else{
              this.common.opening();
              this.common.closing();
              this.common.presentToast('Successfully donated');
            }
            
          }
        }
      ], cssClass: 'page-content alertCustomCss'
    });
    prompt.present();
  }

}
