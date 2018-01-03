import { Injectable } from '@angular/core';
import { PopoverController, LoadingController, ToastController, ModalController, AlertController } from 'ionic-angular';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
@Injectable()
export class CommonProvider {

  private _popOver: any;
  private loader: any;
  private modal: any;
  constructor(public popOver: PopoverController, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, private alertCtrl: AlertController/* ,private sqlite:SQLite */) {

  }

  public openPopOver(Page) {
    this._popOver = this.popOver.create(Page);
    this._popOver.present();
  }

  public closePopOver() {
    this._popOver.dismiss;
  }
  /////////////////////////////////////////////////
  public activeLoading() {
    this.loader = this.loadingCtrl.create({ content: "Please wait ..." })
    this.loader.present();
  }

  public closeLoading() {
    this.loader.dismiss();
  }
  /////////////////////////////////////////////////

  public opening(message = 'Please wait ...') {
    this.loader = this.loadingCtrl.create({ content: message})
    this.loader.present();
  }

  public closing() {
    this.loader.dismiss();
  }
  public presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  openModal(page) {
    this.modal = this.modalCtrl.create(page);
    this.modal.present();
  }
  closeModal() {
    this.modal.dismiss;
  }

  showAlert(aTitle, aSubtitle) {
    let alert = this.alertCtrl.create({
      title: aTitle,
      subTitle: aSubtitle,
      buttons: ['OK']
    });
    alert.present();
  }


}
