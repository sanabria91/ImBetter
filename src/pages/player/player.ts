import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { PlayerService } from '../../services/player';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  playerList: FirebaseListObservable<any>;
  player = {
  id: '',
  firstname: '',
  lastname: '',
  position: '',
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private playerService: PlayerService, public afdb: AngularFireDatabase,
               public alertCtrl: AlertController ) {
    this.playerList = this.afdb.list('/player');
    this.player.id = this.navParams.get('key');
    this.player.firstname = this.navParams.get('firstname');
    this.player.lastname = this.navParams.get('lastname');
    this.player.position = this.navParams.get('position');
  }

  onEditPlayer(player){

   let prompt = this.alertCtrl.create({
     message:'Update player details',
     inputs:[
       {
         name:'first name',
         placeholder:'First Name',
         value: player.firstname
       },
       {
         name: 'last name',
         placeholder: 'Last Name',
         value: player.lastname
       },
      {
         name: 'position',
         placeholder: 'Position',
         value: player.position
       }
     ],
      buttons: [
        {
          text: 'Cancel',
          handler: data=> {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.playerService.updatePlayer(player.id, data.firstname,data.lastname,data.position);
          }
        }
      ]     
  });
  prompt.present();
  }

}
