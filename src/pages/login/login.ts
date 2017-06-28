import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

import { User } from '../../models/users';
 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm : FormGroup;
  public loading: Loading;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController,
              public authProvider: AuthService, public formBuilder: FormBuilder) {

                this.loginForm = formBuilder.group({
                  email:['', Validators.compose([Validators.required, EmailValidator.isValid])],
                  password:['', Validators.compose([Validators.minLength(6), Validators.required])]
                });
              }

  loginUser():void{
    if(!this.loginForm.valid){
      console.log(this.loginForm.value);
    }else{
      this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
          .then( AuthProvider =>{
            this.loading.dismiss().then( () =>{
              this.navCtrl.setRoot(TabsPage);
            });
          }, error => {
            this.loading.dismiss().then( () => {
              let alert = this.alertCtrl.create({
                message: error.message,
                buttons:[{
                  text: "Ok",
                  role: 'cancel'
                }]
              });
              alert.present();
            });
          }
          );
          this.loading = this.loadingCtrl.create();
          this.loading.present();
    }
  }

  gotoSignUp(){
    this.navCtrl.push(RegisterPage);
  }

}
