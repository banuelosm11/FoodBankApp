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

 //replace list 0 position.coords.latitude position.coords.longitude
     //there should be a way to find neareest dropoff location
     //json data
     //speech monday and wednesday 
     //fix click through, css for infowindows

loadDirections() {

   // navigator.geolocation.getCurrentPosition(position => {

            const directionsService = new google.maps.DirectionsService;
            const directionsDisplay = new google.maps.DirectionsRenderer({
                suppressMarkers: true
            });

            let list: any[] = [
                {latlng: new google.maps.LatLng(40.2798, -75.2993),
                    image: {
                    url: 'http://www.freeiconspng.com/uploads/name-people-person-user-icon--icon-search-engine-1.png',
                    scaledSize: new google.maps.Size(40, 40),
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(15, 15) 
                        },
                 content: "Current Location",
                }, 

                {latlng: new google.maps.LatLng(40.1023, -75.2743),
                 image: {
                    url: 'http://www.clker.com/cliparts/3/b/I/R/x/K/corn-cub-hi.png',
                    scaledSize: new google.maps.Size(40, 40),
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(15, 15) 
                        },
                 content: "Pickup Location",
                }, 

                {latlng: new google.maps.LatLng(39.743895, -75.568695),
                    image: {
                    url: 'http://www.iconsdb.com/icons/preview/orange/house-xxl.png',
                    scaledSize: new google.maps.Size(40, 40),
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(15, 15) 
                        },
                 content: "Test"+'<button onclick= "goToThankYou()">Delivery complete</button>',
                }
            ];

            const mapOptions = {
                center: list[0].latlng,
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false
            };

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

            directionsDisplay.setMap(this.map);

            //directionsDisplay.setPanel(this.directionPanel.nativeElement);

            directionsService.route({
                origin: list[0].latlng,
                destination: list[2].latlng,
                waypoints: [{location: list[1].latlng, stopover: true}],
                travelMode: google.maps.TravelMode['DRIVING']
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK){

                var infowindow = new google.maps.InfoWindow();

                for(let i =0; i<3; i++){
                    var marker = new google.maps.Marker({
                    position: list[i].latlng,
                    map: this.map,
                    icon: list[i].image,
                    content: list[i].content
                });
                
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

    goToThankYou(){
        this.navCtrl.push(VolThankYouPage);
    }
 

}

