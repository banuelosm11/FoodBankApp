import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var window: any;
declare var google;

import { DestinationPage } from '../pages';
/**
 * Generated class for the VolunteerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              streetViewControl: false
          };

          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

          let marker = new google.maps.Marker({})

      });
  }

  goToDestination() {
    this.navCtrl.push(DestinationPage);
  }


  lat: number = 39.7391;
  lng: number = -75.5398;

}
