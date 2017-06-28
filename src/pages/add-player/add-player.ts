import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators } from '@angular/forms';

import { PlayerService } from '../../services/player';
import { PlayersListPage } from '../players-list/players-list';

import { AngularFireModule } from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-add-player',
  templateUrl: 'add-player.html',
})
export class AddPlayerPage{

  mode = 'Add';
  selectOption = ['1st','2nd','3rd','SS','LF','CF','RF','C'];
  index: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private playerService: PlayerService) {
  }

  addPlayer(firstname,lastname,position){
      this.playerService.addItem(firstname, lastname, position);
      this.navCtrl.push(PlayersListPage);
    }
  }



