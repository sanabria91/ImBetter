import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

import { AddPlayerPage } from '../add-player/add-player';
import { PlayerPage } from '../player/player';

import { PlayerService } from '../../services/player';


@IonicPage()
@Component({
  selector: 'page-players-list',
  templateUrl: 'players-list.html',
})
export class PlayersListPage {

  player: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private playerService: PlayerService,
              private modalCtrl: ModalController, private alertCtrl: AlertController, private toastCtrl: ToastController) {
  }

  ionViewWillEnter(){
    this.player = this.playerService.getItems();
    console.log(this.player);
  }

  onNewPlayer(){
    this.navCtrl.push(AddPlayerPage);
  }

  onShowOptions(player){
    this.navCtrl.push(PlayerPage,{key:player.$key, firstname:player.firstname, lastname:player.lastname, position:player.position});
  }

}
