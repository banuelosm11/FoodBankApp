import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Donation} from './donation';

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

name: String;
organization: String;
phone: String;
email: String;
address: String;
city: String;
state: String;
zipCode: String;
donation: String;
donationList: Donation[] = [];



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatorPage');
  }

  submit(){
    this.createDonation();
    this.navCtrl.push(DonateThankYouPage);
  }

  createDonation(){

    this.donationList.push(new Donation(this.name, this.organization, this.phone, this.email, this.address, 
    this.city, this.state, this.zipCode, this.donation))

  }


}
