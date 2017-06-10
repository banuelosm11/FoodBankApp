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
    
  }

  loadMap() {
       navigator.geolocation.getCurrentPosition(position => {

            let latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            const mapOptions = {
                center: latlng,
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false
            };

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

            let contentString = "Acme at Trolley"

            let infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            let pickupLoc = {lat: 39.757203, lng: -75.563795};

            let marker = new google.maps.Marker({
                position: pickupLoc,
                map: this.map,
                title: "Acme at Trolley"
            });

            marker.addListener ('click', function() {
                infowindow.open(this.map, marker);
            });
        });
    }

    goToDestination() {
    this.navCtrl.push(DestinationPage);
    }


  lat: number = 39.7391;
  lng: number = -75.5398;

}
