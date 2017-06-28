import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlayerService } from '../../services/player';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  public id:string;
  public firstname: string;
  public lastname: string;
  public position: string;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private playerService: PlayerService) {
    this.id = this.navParams.get('key');
    this.firstname = this.navParams.get('firstname');
    this.lastname = this.navParams.get('lastname');
    this.position = this.navParams.get('position');
  }


}
