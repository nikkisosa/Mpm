import { Injectable } from '@angular/core';
@Injectable()
export class SessionsProvider {

  constructor() {

  }

  /* 
   * 
   * student user_id
   * 
  */
  public set_local_user_id(user_id:any){
     localStorage.setItem('user_id',user_id);
  }

  public get_local_user_id() {
    return localStorage.getItem('user_id');
  }

  public unset_local_user_id() {
    localStorage.removeItem('user_id');
  }

  /* 
   * 
   * student name
   * 
  */
  public set_local_name(name:any) {
     localStorage.setItem('name', name);
  }

  public get_local_name() {
    return localStorage.getItem('name');
  }

  public unset_local_name() {
    localStorage.removeItem('name');
  }

  /* 
   * 
   * student username
   * 
  */
  public set_local_username(username:any) {
     localStorage.setItem('username', username);
  }

  public get_local_username() {
    return localStorage.getItem('username');
  }

  public unset_local_username() {
    localStorage.removeItem('username');
  }

  /* 
   * 
   * student password
   * 
  */
  public set_local_password(password:any) {
     localStorage.setItem('password', password);
  }

  public get_local_password() {
    return localStorage.getItem('password');
  }

  public unset_local_password() {
    localStorage.removeItem('password');
  }

  /* 
   * 
   * student role
   * 
  */
  public set_local_role(role:any) {
     localStorage.setItem('role', role);
  }

  public get_local_role() {
    return localStorage.getItem('role');
  }

  public unset_local_role() {
    localStorage.removeItem('role');
  }

  /* 
   * 
   * student active
   * 
  */
  public set_local_active(active: any) {
     localStorage.setItem('active', active);
  }

  public get_local_active() {
    return localStorage.getItem('active');
  }

  public unset_local_active() {
    localStorage.removeItem('active');
  }

  /* 
   * 
   * student email
   * 
  */
  public set_local_email(email: any) {
     localStorage.setItem('email', email);
  }

  public get_local_email() {
    return localStorage.getItem('email');
  }

  public unset_local_email() {
    localStorage.removeItem('email');
  }

  /* 
   * 
   * student address
   * 
  */
  public set_local_address(address: any) {
     localStorage.setItem('address', address);
  }

  public get_local_address() {
    return localStorage.getItem('address');
  }

  public unset_local_address() {
    localStorage.removeItem('address');
  }

  /* 
   * 
   * student mobile
   * 
  */
  public set_local_mobile(mobile: any) {
     localStorage.setItem('mobile', mobile);
  }

  public get_local_mobile() {
    return localStorage.getItem('mobile');
  }

  public unset_local_mobile() {
    localStorage.removeItem('mobile');
  }

  /* 
   * 
   * student image
   * 
  */
  public set_local_image(image: any) {
     localStorage.setItem('image', image);
  }

  public get_local_image() {
    return localStorage.getItem('image');
  }

  public unset_local_image() {
    localStorage.removeItem('image');
  }

  /* 
   * 
   * student class
   * 
  */
  public set_local_student_class(student_class: any) {
     localStorage.setItem('student_class', student_class);
  }

  public get_local_student_class() {
    return localStorage.getItem('student_class');
  }

  public unset_local_student_class() {
    localStorage.removeItem('student_class');
  }

  /* 
   * 
   * student section
   * 
  */
  public set_local_student_section(student_section: any) {
     localStorage.setItem('student_section', student_section);
  }

  public get_local_student_section() {
    return localStorage.getItem('student_section');
  }

  public unset_local_student_section() {
    localStorage.removeItem('student_section');
  }

  /* 
   * 
   * amount
   * 
  */
  public set_local_amount(amount: any) {
     localStorage.setItem('amount', amount);
  }

  public get_local_amount() {
    return localStorage.getItem('amount');
  }

  public unset_local_amount() {
    localStorage.removeItem('amount');
  }

  /* 
   * 
   * update
   * 
  */
  public set_local_update(update: any) {
     localStorage.setItem('update', update);
  }

  public get_local_update() {
    return localStorage.getItem('update');
  }

  public unset_local_update() {
    localStorage.removeItem('update');
  }

  /* 
   * 
   * latest update
   * 
  */
  public set_local_latest_date(latest_date: any) {
     localStorage.setItem('latest_date', latest_date);
  }

  public get_local_latest_date() {
    return localStorage.getItem('latest_date');
  }

  public unset_local_latest_date() {
    localStorage.removeItem('latest_date');
  }

  /* 
   * 
   * latest amount update
   * 
  */
  public set_local_latest_amount(ltamount: any) {
     localStorage.setItem('latest_amount', ltamount);
  }

  public get_local_latest_amount() {
    return localStorage.getItem('latest_amount');
  }

  public unset_local_latest_amount() {
    localStorage.removeItem('latest_amount');
  }

  /* 
   * 
   * last update
   * 
  */
  public set_local_last_date(last_date: any) {
     localStorage.setItem('last_date', last_date);
  }

  public get_local_last_date() {
    return localStorage.getItem('last_date');
  }

  public unset_local_last_date() {
    localStorage.removeItem('last_date');
  }

  /* 
   * 
   * deposits
   * 
  */
  public set_local_deposits(amount:any,date:any,time: any,machine:any) {
    var oldData = JSON.parse(localStorage.getItem('deposits')) || [];
    var newItem = {
      'amount': amount,
      'date': date,
      'time': time,
      'machine': machine
    };

    oldData.unshift(newItem);
    localStorage.setItem('deposits', JSON.stringify(oldData));
  }

  public get_local_deposits() {
    return localStorage.getItem('deposits');
  }

  public unset_local_deposits() {
    localStorage.removeItem('deposits');
  }

  /* 
   * 
   * temporary deposits storage 
   * 
  */
  public set_local_temp_deposits(amount: any, date: any, time: any, machine: any) {
    var oldData = JSON.parse(localStorage.getItem('temp_deposits')) || [];
    var newItem = {
      'amount': amount,
      'date': date,
      'time': time,
      'machine': machine
    };

    oldData.unshift(newItem);
    localStorage.setItem('temp_deposits', JSON.stringify(oldData));
  }

  public get_local_temp_deposits() {
    return localStorage.getItem('temp_deposits');
  }

  public unset_local_temp_deposits() {
    localStorage.removeItem('temp_deposits');
  }

  /* 
   * 
   * rfid
   * 
  */
  public set_local_rfid(rfid: any) {
    localStorage.setItem('rfid', rfid);
  }

  public get_local_rfid() {
    return localStorage.getItem('rfid');
  }

  public unset_local_rfid() {
    localStorage.removeItem('rfid');
  }

  /* 
   * 
   * balance
   * 
  */
  public set_local_balance(balance: any) {
    localStorage.setItem('balance', balance);
  }

  public get_local_balance() {
    return localStorage.getItem('balance');
  }

  public unset_local_balance() {
    localStorage.removeItem('balance');
  }

  /* 
   * 
   * KIOSK
   * 
  */
  public set_local_kiosk(kiosk: any) {
    localStorage.setItem('kiosk', kiosk);
  }

  public get_local_kiosk() {
    return localStorage.getItem('kiosk');
  }

  public unset_local_kiosk() {
    localStorage.removeItem('kiosk');
  }

  /* 
   * 
   * KIOSK ACTIVE/INACTIVE
   * override using string Inactive/Active
  */
  public set_local_kiosk_active(kiosk: any = 'Inactive') {
    localStorage.setItem('active_kiosk', kiosk);
  }

  public get_local_kiosk_active() {
    return localStorage.getItem('active_kiosk');
  }

  public unset_local_kiosk_active() {
    localStorage.removeItem('active_kiosk');
  }

  /* 
   *
   * UNSET ALL SESSION
   * 
  */  
  public unset_all() {
    localStorage.clear();
  }

  /* 
   *
   * ANNOUNCEMENT
   * 
  */
  public set_local_announcement(title: any,message:any,date:any,) {
    var oldData = JSON.parse(localStorage.getItem('announcement')) || [];
    var newItem = {
      'title': title,
      'date': date,
      'message': message
    };

    oldData.unshift(newItem);
    localStorage.setItem('announcement', JSON.stringify(oldData));
  }

  public get_local_announcement() {
    return localStorage.getItem('announcement');
  }

  public unset_local_announcement() {
    localStorage.removeItem('announcement');
  }

  /* 
   *
   * Donation
   * 
  */
  public set_local_donation(title: any, subtitle: any, content: any, ) {
    var item = {
      'title': title,
      'subtitle': subtitle,
      'content': content
    };
    localStorage.setItem('donate', JSON.stringify(item));
  }

  public get_local_donation() {
    return localStorage.getItem('donate');
  }

  public unset_local_donation() {
    localStorage.removeItem('donate');
  }

}
