import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';

import { AddPlayerPage } from '../pages/add-player/add-player';
import { PlayerPage } from '../pages/player/player';
import { PlayersListPage } from '../pages/players-list/players-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './app.firebase.config';

import { AuthService } from '../services/auth';  
import { PlayerService } from '../services/player';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    WelcomePage,
    HomePage,
    AddPlayerPage,
    PlayerPage,
    PlayersListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule, 
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    WelcomePage,
    HomePage,
    AddPlayerPage,
    PlayerPage,
    PlayersListPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    PlayerService
  ]
})
export class AppModule {}
