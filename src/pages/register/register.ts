import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/users';
import { AuthService } from '../../services/auth';
import { EmailValidator } from '../../validators/email';
import { TabsPage } from '../tabs/tabs';  

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public signupForm : FormGroup;
  public loading: Loading;

  constructor(public navCtrl: NavController, public authProvider: AuthService, public formBuilder: FormBuilder,
              public loadingCtrl: LoadingController, public alertCtrl:AlertController) {
                this.signupForm = formBuilder.group({
                  email: ['', Validators.compose([Validators.required,
                  EmailValidator.isValid])],
                  password: ['', Validators.compose([Validators.minLength(6),
                  Validators.required])]
                 });
              }
              
  async signUpUser(){
    if(!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else{
      this.authProvider.signupUser(this.signupForm.value.email, this.signupForm.value.password)
        .then(()=>{
          this.loading.dismiss().then( ()=>{
            this.navCtrl.setRoot(TabsPage);
            console.log('success');
          });
        }, (error)=>{
          this.loading.dismiss().then(()=>{
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: 'OK',
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          });
        });
          this.loading = this.loadingCtrl.create();
          this.loading.present();  
    }
  }
  

}
