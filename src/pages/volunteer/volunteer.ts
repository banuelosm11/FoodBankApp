import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var window:any;

import { DestinationPage } from '../pages';
/**
 * Generated class for the VolunteerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-volunteer',
  templateUrl: 'volunteer.html',
})
export class VolunteerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunteerPage');
  }

  goToDestination() {
    this.navCtrl.push(DestinationPage);
  }


  lat: number = 39.7391;
  lng: number = -75.5398;

}
