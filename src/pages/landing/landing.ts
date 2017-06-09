import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HomePage, VolunteerPage, DonatorPage} from '../pages';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  showLogin:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  goToDonator(){
    this.navCtrl.push(DonatorPage);
  }

  goToVolunteer(){
    this.navCtrl.push(VolunteerPage);
  }

  logOut(){
        let alert = this.alertCtrl.create({
          title: 'Loging Out',
          message: 'Do you want to log out?',
          buttons: [
            {
              text: 'Yes',
              handler: () => {
                console.log('Cancel clicked');
                this.navCtrl.setRoot(HomePage);
                //remind user who has signed out
                let confirmedAlert = this.alertCtrl.create({
                 title: 'You have signed out.',
                 subTitle: '',
                 buttons: ['OK']
                 });
                 confirmedAlert.present();
              }
            },
            {
              text: 'No',
              handler: () => {
                console.log('Buy clicked');
              }
            }
          ]
        });
        alert.present();

  }

}
