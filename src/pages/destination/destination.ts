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
    //this.startNavigation();
    // this._destinationService.getDestinations().subscribe(data => {
		// 		console.log(data);
			// }
		// );
  }

 // get pickup location, and map is made with that marker

  loadMap() {
     
            const mapOptions = {
                center: new google.maps.LatLng(39.743895, -75.568695),
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false
            };

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

             const directionsService = new google.maps.DirectionsService;
        const directionsDisplay = new google.maps.DirectionsRenderer;

        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.directionPanel.nativeElement);

        directionsService.route({
            origin: {lat: 39.743895, lng: -75.568695},
            destination: {lat: 39.788278, lng: -75.545414},
            travelMode: google.maps.TravelMode['DRIVING']
        }, (res, status) => {
            if (status === google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            }else {
                console.log("Error Loading Directions");
            }
        });
        
    }

    // startNavigation() {

    //     navigator.geolocation.getCurrentPosition(position => {

       

    //     });
    // }

            //  let infowindow = new google.maps.InfoWindow({
            //     content: "Destination"
            // });

            // let marker = new google.maps.Marker({
            //     position: {lat: 39.757203, lng: -75.563795},
            //     map: this.map,
            // });

            // marker.addListener ('click', function() {
            //     infowindow.open(this.map, marker);
            // });

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
