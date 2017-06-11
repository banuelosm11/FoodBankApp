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

    navigator.geolocation.getCurrentPosition(position => {

            const directionsService = new google.maps.DirectionsService;
            const directionsDisplay = new google.maps.DirectionsRenderer;
     
            //pickup location lat long and marker needed
            const mapOptions = {
                center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false
            };

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

            directionsDisplay.setMap(this.map);
            //directionsDisplay.setPanel(this.directionPanel.nativeElement);

            directionsService.route({
                origin: {lat: position.coords.latitude, lng: position.coords.longitude},
                waypoint: {lat: 39.743895, lng: -75.568695},
                destination: {lat: 39.743895, lng: -75.568695},
                travelMode: google.maps.TravelMode['DRIVING']
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK){
                    directionsDisplay.setDirections(result);
                }else {
                    console.log("Error Loading Directions");
                }
            });
             });
    }

//   mapLocation() {
  
   
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


// http://www.google.com/mapfiles/markerB.png



  
  
  
//   loadPickupToDestination() {

//             const directionsService = new google.maps.DirectionsService;
//             const directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers:true});
     
//             //pickup location lat long and marker needed
//             const mapOptions = {
//                 center: new google.maps.LatLng(39.743895, -75.568695),
//                 zoom: 13,
//                 mapTypeId: google.maps.MapTypeId.ROADMAP,
//                 streetViewControl: false
//             };

//             this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//             let infowindow = new google.maps.InfoWindow();
//             directionsDisplay.setMap(this.map);
//             //directionsDisplay.setPanel(this.directionPanel.nativeElement);

//             directionsService.route({
//                 origin: {lat: 39.743895, lng: -75.568695},
//                 destination: {lat: 39.788278, lng: -75.545414},
//                 travelMode: google.maps.TravelMode['DRIVING']
//             }, (res, status) => {
//                 if (status === google.maps.DirectionsStatus.OK){
//                     directionsDisplay.setDirections(res);
//                 }else {
//                     console.log("Error Loading Directions");
//                 }
//             }

//   }


//             let marker = new google.maps.Marker({
//                 position: res.route[0].leg[1],
//                 map: this.map,
//             });

//             google.maps.event.addListener (marker, 'click', function() {
// infowindow.setContent('<p>Event Name: '+this.title+'</p>' +
//             '<p>Event Type: '+this.etype+'</p>' +
//             '<p>Cause: '+this.cause+'</p>' +
//             '<p>Date: '+this.date+'</p>' +
//                 '<p>Time: '+this.time+'</p>' +
//                 '<button onclick="goToThankYou()">Click me</button>');

//                 infowindow.open(this.map, marker);
//             });

//             });
        
//     }

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



  goToThankYou() {
    this.navCtrl.push(VolThankYouPage);
  }

}
