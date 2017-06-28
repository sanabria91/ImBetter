import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';

import * as firebase from 'firebase';

import { AuthService } from '../services/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabsPage = TabsPage;
  loggedIn = TabsPage;
  loggedOut = WelcomePage;
  @ViewChild('nav') nav: NavController

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthService,
              private menuCtrl: MenuController) {
    
    firebase.auth().onAuthStateChanged( (user)=>{
      if(user){
        this.nav.setRoot(this.loggedIn);
      }else{
        this.nav.setRoot(this.loggedOut);
      }
    });
    
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(this.loggedOut);
  }
}
