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
            let latlng = new google.maps.LatLng(34.2257, -77.9447);

            const mapOptions = {
                center: latlng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false
            };

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }

    addMarkersToMap(markers) {
      for(let marker of markers) {
        let position = new google.maps.LatLng(marker["lat"], marker["lng"]);

        let pickupLocationMarker = new google.maps.Marker({
          position: position,
          locationName: marker["locationName"],
        });
        pickupLocationMarker.setMap(this.map);
      }
    }

  goToDestination() {
    this.navCtrl.push(DestinationPage);
  }

}
