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
    this.loadDirections();
    // this._destinationService.getDestinations().subscribe(data => {
		// 		console.log(data);
			// }
		// );
  }



loadDirections() {

   // navigator.geolocation.getCurrentPosition(position => {

            const directionsService = new google.maps.DirectionsService;
            const directionsDisplay = new google.maps.DirectionsRenderer({
                suppressMarkers: true
            });
     
            const mapOptions = {
                center: new google.maps.LatLng(40.2798, -75.2993),
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false
            };

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
////
          //  let infowindow = new google.maps.InfoWindow();
            directionsDisplay.setMap(this.map);
                
            //pickup location lat long and marker needed
            let waypts = [];
            waypts.push({location: new google.maps.LatLng(40.1023, -75.2743), stopover: true});
            //directionsDisplay.setPanel(this.directionPanel.nativeElement);

            //position.coords.latitude, lng: position.coords.longitude
            directionsService.route({
                origin: {lat: 40.2798, lng: -75.2993},
                destination: {lat: 39.743895, lng: -75.568695},
                waypoints: waypts,
                travelMode: google.maps.TravelMode['DRIVING']
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK){
                    // let wind = this.createMarker(new google.maps.LatLng(40.2798, -75.2993));
                    // this.createMarker(new google.maps.LatLng(39.743895, -75.568695));
                    // this.createMarker(new google.maps.LatLng(40.1023, -75.2743));

                    var infowindow = new google.maps.InfoWindow({
                    content: "Testing"
                     });

                    var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.2798, -75.2993),
                    map: this.map,
                    title: 'Uluru (Ayers Rock)'
                    });
                    marker.addListener('click', function() {
                    infowindow.open(this.map, marker);
                    });
                    
                    directionsDisplay.setDirections(result);
                }else {
                    console.log("Error Loading Directions");
                }
            });
            // });
 }

//   createMarker(latlng) {
    
//     var contentString = "This is just a test";
//     var marker = new google.maps.Marker({
//       position: latlng,
//       map: this.map,
//       zIndex: Math.round(latlng.lat() * -100000) << 5
//     });

//     google.maps.event.addListener(marker, 'click', function() {
//       this.infowindow.setContent("Thisis just a test");
//       this.infowindow.open(this.map, marker);
//     });
//   }

// let legs = result.routes[0].legs;
//         for (i = 0; i < legs.length; i++) {
//           if (i == 0) {
//             let startLocationlatlng = legs[i].start_location;
//             let startLocationaddress = legs[i].start_address;
//             // createMarker(legs[i].start_location, "start", legs[i].start_address, "green");
//           } 

  goToThankYou() {
    this.navCtrl.push(VolThankYouPage);
  }

}
