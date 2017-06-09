import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LandingPage, DonatorPage} from '../pages';

/**
 * Generated class for the DonateThankYouPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-donate-thank-you',
  templateUrl: 'donate-thank-you.html',
})
export class DonateThankYouPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateThankYouPage');
  }

  donateAgain(){
    this.navCtrl.push(DonatorPage);
  }

  goToLanding(){
    this.navCtrl.push(LandingPage);
  }

}
