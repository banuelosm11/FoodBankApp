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
    // this._destinationService.getDestinations().subscribe(data => {
		// 		console.log(data);
			// }
		// );
  }

  loadMap() {
       navigator.geolocation.getCurrentPosition(position => {
            //destination locatoin
            let latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            const mapOptions = {
                center: latlng,
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false
            };

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


            let infowindow = new google.maps.InfoWindow({
                content: "Destination"
            });

            let destinationLoc = {lat: 39.757203, lng: -75.563795};

            let marker = new google.maps.Marker({
                position: destinationLoc,
                map: this.map,
            });

            marker.addListener ('click', function() {
                infowindow.open(this.map, marker);
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

}
