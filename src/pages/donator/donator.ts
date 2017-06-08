import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DonateThankYouPage} from '../pages';
/**
 * Generated class for the DonatorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-donator',
  templateUrl: 'donator.html',
})
export class DonatorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatorPage');
  }

  submit(){
    this.navCtrl.push(DonateThankYouPage);
  }

name: String = "Test marker";
organization: String = "Test marker";
phone: String = "Test marker";
email: String = "Test marker";
donation: String = "Test marker";


}
