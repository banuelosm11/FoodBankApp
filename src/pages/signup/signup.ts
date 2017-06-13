import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import {LandingPage, DonatorPage} from '../pages';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  name:string = "";
 password:string = "";
 email:string = "";
 phone:string = "";
 address:string = "";
 city:string = "";
 state:string = "";
 zipCode:string = "";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  goToLanding(){
    
  if (  this.name === ""
      || this.password === ""
      || this.email === ""
      || this.phone === ""
      || this.address === ""
      || this.city === ""
      || this.state === ""
      || this.zipCode === ""
    ){
      let alert = this.alertCtrl.create({
        title: 'Missing Information', 
        subTitle: 'Please fill out all fields before submit.', 
        buttons: ['OK']
      });
      alert.present();
   }
   else {    
    this.navCtrl.push(LandingPage);
  }

}

}
