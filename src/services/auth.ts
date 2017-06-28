import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import 'rxjs/add/operator/map';
import * as firebase from 'firebase';


@Injectable()
export class AuthService {

    public userProfileRef : firebase.database.Reference;
    
     constructor(public http: Http, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase){
        this.userProfileRef = firebase.database().ref('/userProfile');
    }

    loginUser(email: string, password:string){
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signupUser(email:string, password:string){
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then( newUser =>{
            this.userProfileRef.child(newUser.uid).set({
                email: email
            });
        });
    }

    logout(){
        this.userProfileRef.child(this.afAuth.auth.currentUser.uid).off();
        return this.afAuth.auth.signOut();
    }

	getActiveUser(){
		return this.afAuth.auth.currentUser;
	}

}
