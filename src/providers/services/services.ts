import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch'
/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  private url_auth_login: string = 'http://192.168.1.2/httpservices/Meta/authentication/';
  private url_background_check_active_kiosk: string = 'http://192.168.1.2/httpservices/Meta/kiosk/';
  private url_current_deposit: string = 'http://192.168.1.2/httpservices/Meta/deposits/';
  private url_global_announcement: string = 'http://192.168.1.2/httpservices/Meta/notification/';
  constructor(public http: Http) {
  }

  user_login(user, pass) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Accept': 'application/x-www-form-urlencoded'
      });
      let body = new FormData();
      body.append("user", user);
      body.append("pass", pass);
      this.http.post(this.url_auth_login, body, { headers: headers }).
        subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });

    });
  }

  background_check_kiosk(rfid) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Accept': 'application/x-www-form-urlencoded'
      });
      let body = new FormData();
      body.append("RFID", rfid);
      this.http.post(this.url_background_check_active_kiosk, body, { headers: headers }).
        subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });

    });
  }

  user_current_deposit(rfid) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Accept': 'application/x-www-form-urlencoded'
      });
      let body = new FormData();
      body.append("RFID", rfid);
      this.http.post(this.url_current_deposit, body, { headers: headers }).
        subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });

    });
  }

  user_notification(user_id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Accept': 'application/x-www-form-urlencoded'
      });
      let body = new FormData();
      body.append("user_id", user_id);
      this.http.post(this.url_global_announcement, body, { headers: headers }).
        subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });

    });
  }


}
