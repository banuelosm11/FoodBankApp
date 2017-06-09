import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DestinationService } from '../../app/services/destination.service'
import {VolThankYouPage } from '../pages';

/**
 * Generated class for the DestinationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 declare var google;

@IonicPage()
@Component({
  selector: 'page-destination',
  templateUrl: 'destination.html',
  providers: [DestinationService]
})
export class DestinationPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionPanel: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _destinationService: DestinationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinationPage');
    this.loadMap();
    this.startNavigation();
    // this._destinationService.getDestinations().subscribe(data => {
		// 		console.log(data);
			// }
		// );
  }

  loadMap() {
        navigator.geolocation.getCurrentPosition(position => {

            let latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            const mapOptions = {
                center: latlng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false
            };

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

            let marker = new google.maps.Marker({})

        });
    }

    startNavigation() {

        //change to ion native loction import because it asks the device to use its location
        navigator.geolocation.getCurrentPosition(position => {

        const directionsService = new google.maps.DirectionsService;
        const directionsDisplay = new google.maps.DirectionsRenderer;

        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.directionPanel.nativeElement);

        directionsService.route({
            origin: {lat: position.coords.latitude, lng: position.coords.longitude},
            destination: {lat: 39.788278, lng: -75.545414},
            travelMode: google.maps.TravelMode['DRIVING']
        }, (res, status) => {
            if (status === google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            }else {
                console.log("Error Loading Directions");
            }
        });

        });
    }

  // ngOnInit(){
	// 	this._destinationService.getDestinations()
	// 		.subscribe(
	// 			(destinations) => this.destinations = destinations,
	// 			(err) => {console.log(err);
	// 			}
	// 		)
  // }

  goToThankYou() {
    this.navCtrl.push(VolThankYouPage);
  }

  //  lat: number = 39.7391;
  //  lng: number = -75.5398;

}
