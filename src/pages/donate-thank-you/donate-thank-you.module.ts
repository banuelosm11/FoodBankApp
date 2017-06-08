import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonateThankYouPage } from './donate-thank-you';

@NgModule({
  declarations: [
    DonateThankYouPage,
  ],
  imports: [
    IonicPageModule.forChild(DonateThankYouPage),
  ],
  exports: [
    DonateThankYouPage
  ]
})
export class DonateThankYouPageModule {}
