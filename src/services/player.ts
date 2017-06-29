import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {

    constructor(public http: Http, public afDatabase : AngularFireDatabase){}

    getItems(){
        return this.afDatabase.list('/player');
    }

    addItem(firstname:string,lastname:string, position:string){
        this.afDatabase.list('/player/').push({firstname:firstname,lastname:lastname, position:position});
    }

    removeItem(id:string){
        this.afDatabase.list('/player').remove(id);
    }

    updatePlayer(playerId,firstname:string,lastname:string, position:string){
        this.afDatabase.list('/player/').update(playerId,{firstname:firstname,lastname:lastname, position:position});
    }
}
