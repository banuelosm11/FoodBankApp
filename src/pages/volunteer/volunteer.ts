import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var window:any;

import { DestinationPage } from '../pages';
/**
 * Generated class for the VolunteerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-volunteer',
  templateUrl: 'volunteer.html',
})
export class VolunteerPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionPanel: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunteerPage');
    this.loadMap();
    this.startNavigation();
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

            let marker = new google.maps.Marker({
              position: latlng,
              map: this.map
            })

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

  goToDestination() {
    this.navCtrl.push(DestinationPage);
  }


  lat: number = 39.7391;
  lng: number = -75.5398;

}
