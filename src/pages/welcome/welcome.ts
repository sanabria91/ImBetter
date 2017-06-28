import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  signUp(){
    this.navCtrl.push(RegisterPage);
  }

}
