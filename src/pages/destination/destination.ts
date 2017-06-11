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
            const directionsDisplay = new google.maps.DirectionsRenderer;
     
            const mapOptions = {
                center: new google.maps.LatLng(40.2798, -75.2993),
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false
            };

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

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
                    directionsDisplay.setDirections(result);
                }else {
                    console.log("Error Loading Directions");
                }
            });
            // });
    }

  
   
//     infowindow = new google.maps.InfoWindow();
//     google.maps.event.addDomListener(document.getElementById('routebtn'), 'click', calcRoute);
//   }


//         // Display start and end markers for the route.
//         let legs = result.routes[0].legs;
//         for (i = 0; i < legs.length; i++) {
//           if (i == 0) {
//             let startLocationlatlng = legs[i].start_location;
//             let startLocationaddress = legs[i].start_address;
//             // createMarker(legs[i].start_location, "start", legs[i].start_address, "green");
//           }
//           if (i != 0) {
//             let waypointlatlng = legs[i].start_location;
//             let waypointaddress = legs[i].start_address;
//           }
//           if (i == legs.length - 1) {
//             let endLocationlatlng = legs[i].end_location;
//             let endLocationaddress = legs[i].end_address;
//           }
//           var steps = legs[i].steps;
//         }
//         createMarker(this.endLocationlatlng, "end", "special text for end marker", "http://www.google.com/mapfiles/markerB.png")
//         createMarker(this.startLocationlatlng, "start", "special text for start marker", "http://maps.gstatic.com/mapfiles/markers2/marker_greenA.png");
        
//         createMarker(this.waypointlatlng, "waypoint", "waypoint special text for waypoint marker", "http://www.google.com/mapfiles/marker_yellow.png");
    
//       } else {
//         alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
//       }
//     });
//   }

//   function createMarker(latlng, label, html, url) {
//     var contentString = '<b>' + label + '</b><br>' + html;
//     var marker = new google.maps.Marker({
//       position: latlng,
//       map: this.map,
//       icon: url,
//       title: label,
//       zIndex: Math.round(latlng.lat() * -100000) << 5
//     });

//     google.maps.event.addListener(marker, 'click', function() {
//       infowindow.setContent(contentString);
//       infowindow.open(map, marker);
//     });
//   }
//   google.maps.event.addDomListener(window, 'load', initialize);
// }

  goToThankYou() {
    this.navCtrl.push(VolThankYouPage);
  }

}
