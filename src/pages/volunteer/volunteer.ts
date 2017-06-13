import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private _pickUpLocation: PickUpLocationService, public modalCtrl: ModalController) {
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
            let latlng = new google.maps.LatLng(39.757203, -75.563795);

            const mapOptions = {
                center: latlng,
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false
            };

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }

    addMarkersToMap(markers: Array<Object>) {
      let infoWindow = new google.maps.InfoWindow();
      let that = this;
      for(let marker of markers) {
        let pickupLocationMarker = new google.maps.Marker({
          position: {lat: marker["lat"], lng: marker["lng"]},
          locationName: marker["locationName"],
          animation: google.maps.Animation.DROP
        });
        (function(pickupLocationMarker, markers) {
          google.maps.event.addListener(pickupLocationMarker, 'click', function(e) {
            infoWindow.setContent(marker["locationName"] + "<br />" + marker["phoneNumber"]);
            infoWindow.open(this.map, this);
          });
          google.maps.event.addListener(pickupLocationMarker, 'dblclick', function(e) {
            let pageDetails = that.modalCtrl.create(DestinationPage);
            pageDetails.present();
          });
        })(pickupLocationMarker, markers);

        pickupLocationMarker.setMap(this.map);
      }

    }

    goToDestination(){
    this.navCtrl.push(DestinationPage);
  }

}
