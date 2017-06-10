import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PickUpLocationService } from '../../app/services/pickUpLocation.service';
declare var window: any;

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
  providers: [PickUpLocationService]
})
export class VolunteerPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionPanel: ElementRef;
  map: any;
  pickUpLocationsJSON: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _pickUpLocation: PickUpLocationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunteerPage');
    this.pickUpLocationsJSON = this._pickUpLocation.getPickUpLocations();
    this.loadMap();
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

            let infoWindow = new google.maps.InfoWindow();

            for(let i = 0, length = this.pickUpLocationsJSON.length; i < length; i++) {
              let data = this.pickUpLocationsJSON[i],
                  latLng = new google.maps.LatLng(data.lat, data.lng);

              let marker = new google.maps.Marker({
                position: latLng,
                map: this.map,
                locationName: data.locationName
              });
            }

        });
    }

  goToDestination() {
    this.navCtrl.push(DestinationPage);
  }


  lat: number = 39.7391;
  lng: number = -75.5398;

}
