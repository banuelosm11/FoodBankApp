import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import{Donation} from './donation';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';

import {DonateThankYouPage} from '../pages';
/**
 * Generated class for the DonatorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Injectable()
@Component({
  selector: 'page-donator',
  templateUrl: 'donator.html',
})
export class DonatorPage {

name: String =   '';
organization: String;
phone: String;
email: String;
address: String;
city: String;
state: String;
zipCode: String;
donationDescription: String;
donation: Donation;



  constructor(public navCtrl: NavController, public navParams: NavParams, public _http: Http, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatorPage');
  }

  submit(){
if (  this.name === ""
      || this.organization === ""
      || this.email === ""
      || this.phone === ""
      || this.address === ""
      || this.city === ""
      || this.state === ""
      || this.zipCode === ""
      || this.donationDescription === ""
    ){
     let alert = this.alertCtrl.create({
        title: 'Missing Information', 
        subTitle: 'Please fill out all fields before submit.', 
        buttons: ['OK']
      });
      alert.present();
   }
   else {

    this.createDonation();
    this.postDonation();
    this.navCtrl.setRoot(DonateThankYouPage);
  }
  }

  createDonation(){

   this.donation = new Donation(this.name, this.organization, this.phone, this.email, this.address, 
    this.city, this.state, this.zipCode, this.donationDescription);

  }

 postDonation(){
  var headers = new Headers();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json');
  let options = new RequestOptions({headers:headers});

        this._http.post("http://jsonplaceholder.typicode.com/posts", {_body:this.donation}, options)
        .subscribe(data => {
          console.log(data['_body']);
        },
        error => {
          console.log(error);
        });
    }

}
