import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import {HomePage, LandingPage, DonatorPage} from '../pages';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
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
