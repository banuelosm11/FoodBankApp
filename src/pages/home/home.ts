import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {LandingPage, SignupPage} from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

   
  }
  
   goToSignUp(){
      this.navCtrl.push(SignupPage);
  }

    login(){
      this.navCtrl.push(LandingPage);
  }

}
