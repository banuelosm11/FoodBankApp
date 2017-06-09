import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DestinationService } from '../../app/services/destination.service'

/**
 * Generated class for the DestinationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-destination',
  templateUrl: 'destination.html',
  providers: [DestinationService]
})
export class DestinationPage {
  // destinations:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _destinationService: DestinationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinationPage');
    this._destinationService.getDestinations();
  }

  // ngOnInit(){
	// 	this._destinationService.getDestinations()
	// 		.subscribe(
	// 			(destinations) => this.destinations = destinations,
	// 			(err) => {console.log(err);
	// 			}
	// 		)
  // }

}
