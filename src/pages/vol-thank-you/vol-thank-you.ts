import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import {LandingPage, DonatorPage, HomePage, VolunteerPage} from '../pages';


/**
 * Generated class for the VolThankYouPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-vol-thank-you',
  templateUrl: 'vol-thank-you.html',
})
export class VolThankYouPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolThankYouPage');
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

  volunteerAgain(){
    this.navCtrl.push(VolunteerPage);
  }

  goToLanding(){
    this.navCtrl.push(LandingPage);
  }

}
