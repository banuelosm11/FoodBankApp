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
                //let image = 'http://www.clker.com/cliparts/3/b/I/R/x/K/corn-cub-hi.png';
                    let list: Object[] = [new google.maps.LatLng(40.2798, -75.2993), new google.maps.LatLng(40.1023, -75.2743), new google.maps.LatLng(39.743895, -75.568695)];
                    var infowindow = new google.maps.InfoWindow();

                for(let i =0; i<3; i++){
                    var marker = new google.maps.Marker({
                    position: list[i],
                    map: this.map,
                    //icon: image,
                });
                    marker.content = "Test";

                    google.maps.event.addListener(marker,'click', function() {
                    infowindow.setContent(this.content);    
                    infowindow.open(this.map, this);
                    });
                }
                
                    directionsDisplay.setDirections(result);
                }else {
                    console.log("Error Loading Directions");
                }
            });
            // });
 } 

  goToThankYou() {
    this.navCtrl.push(VolThankYouPage);
  }

}
