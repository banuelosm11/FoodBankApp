import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonatorPage } from './donator';

@NgModule({
  declarations: [
    DonatorPage,
  ],
  imports: [
    IonicPageModule.forChild(DonatorPage),
  ],
  exports: [
    DonatorPage
  ]
})
export class DonatorPageModule {}
