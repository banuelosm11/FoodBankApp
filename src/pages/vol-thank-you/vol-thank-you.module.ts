import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolThankYouPage } from './vol-thank-you';

@NgModule({
  declarations: [
    VolThankYouPage,
  ],
  imports: [
    IonicPageModule.forChild(VolThankYouPage),
  ],
  exports: [
    VolThankYouPage
  ]
})
export class VolThankYouPageModule {}
