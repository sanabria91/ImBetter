import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlayerPage } from './add-player';

@NgModule({
  declarations: [
    AddPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlayerPage),
  ],
  exports: [
    AddPlayerPage
  ]
})
export class AddPlayerPageModule {}
