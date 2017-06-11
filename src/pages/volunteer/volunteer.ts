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
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _pickUpLocation: PickUpLocationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunteerPage');
    this.loadMap();
    this._pickUpLocation.getPickUpLocations()
        .subscribe(data => {
        this.addMarkersToMap(data);
    });
  }

  loadMap() {
            let latlng = new google.maps.LatLng(39.7391, -75.5398);

            const mapOptions = {
                center: latlng,
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false
            };

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }

    addMarkersToMap(markers: Array<Object>) {
      for(let marker of markers) {
        //console.log(marker["lat"], marker["lng"]);
        //console.log(marker["locationName"]);
        let pickupLocationMarker = new google.maps.Marker({
          position: {lat: marker["lat"], lng: marker["lng"]},
          locationName: marker["locationName"],
        });
        pickupLocationMarker.setMap(this.map);
      }

    }

    goToDestination() {
    this.navCtrl.push(DestinationPage);
    }

}
