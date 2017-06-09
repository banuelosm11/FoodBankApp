import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

import {LandingPage, SignupPage} from '../pages';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showLogin:boolean = true;
  email:string = '';
  password:string = '';
  name:string = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  doLogin() {

      if(this.showLogin) {
        console.log('process login');

        if(this.email === '' || this.password === '') {
          let alert = this.alertCtrl.create({
           title: 'Missing username or password',
           subTitle: 'First time user? Click Sign Up to create an account.',
           buttons: ['OK']
           });
          alert.present();
        }
        //should connect to server or local jason
        else if (this.email === 'whereisthefood' && this.password === '0000') {
                  this.navCtrl.setRoot(LandingPage);
        }
        else {
          let alert = this.alertCtrl.create({
           title: 'Invalid username or password.',
           subTitle: 'Please try again',
           buttons: ['OK']
          });
          alert.present();
        }

    }

  }

  doRegister(){
      this.navCtrl.push(SignupPage);
  }



}
