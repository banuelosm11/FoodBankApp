import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DestinationService } from '../../app/services/destination.service'
import { VolThankYouPage } from '../pages';
import { SelectedPickUpService } from '../../app/services/selectedPickUp.service'


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
  providers: [DestinationService, SelectedPickUpService]
})
export class DestinationPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionPanel: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _destinationService: DestinationService, private _selectedPickUpService: SelectedPickUpService,
  public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinationPage');
    // this._destinationService.getDestinations()
    //     .subscribe(data => {});
    this._selectedPickUpService.getSelectedPickUp()
        .subscribe(data=>
		{this.loadDirections(data)});
  }

     //turn on geolocation and replace list 0 position.coords.latitude position.coords.longitude
     //there should be a way to find nearest dropoff location, using all json data for destination
     //fix click through, css for infowindows

loadDirections(pickUpDropOff:any) {

   // navigator.geolocation.getCurrentPosition(position => {

            const directionsService = new google.maps.DirectionsService;
            const directionsDisplay = new google.maps.DirectionsRenderer({
                suppressMarkers: true
            });

    //https://lh3.googleusercontent.com/5OM8W6oF0NdKd_8aEKlpSybDejudy-AFsxT6E3p_Acb9iLNCrdQXwhXwJhsNcVAJNhs=w300
            let list: any[] = [
                {latlng: new google.maps.LatLng(39.7708, -75.5597),
                    image: {
                    url: 'http://www.freeiconspng.com/uploads/name-people-person-user-icon--icon-search-engine-1.png',
                    scaledSize: new google.maps.Size(30, 30),
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(15, 15)
                        },
                 content: "Current Location",
                },

                {latlng: new google.maps.LatLng(pickUpDropOff[0].lat, pickUpDropOff[0].lng),
                 image: {
                    url: 'http://www.clker.com/cliparts/3/b/I/R/x/K/corn-cub-hi.png',
                    scaledSize: new google.maps.Size(40, 40),
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(15, 15)
                        },
                 content: "Pickup: " + "<br>" + pickUpDropOff[0].locationName + "<br>Contact: "+pickUpDropOff[0].name
                 + ", "+pickUpDropOff[0].phone+ "<br>"+pickUpDropOff[0].address+ "<br>"+pickUpDropOff[0].city+ ", "
                 +pickUpDropOff[0].state+" "+pickUpDropOff[0].zipCode+ "<br>"+pickUpDropOff[0].donation,
                },


                {latlng: new google.maps.LatLng(39.743895, -75.568695),
                    image: {
                    url: 'https://www.loudounhunger.org/wp-content/uploads/2016/09/Green_Food_Bank.png',
                    scaledSize: new google.maps.Size(40, 40),
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(15, 15)
                        },
                 content: "Dropoff: " + "<br>" + pickUpDropOff[1].locationName + "<br>Contact: "+pickUpDropOff[1].phone+ "<br>"
                 +pickUpDropOff[1].address+ "<br>"+pickUpDropOff[1].city+ ", "+pickUpDropOff[1].state+" "+pickUpDropOff[1].zipCode
                 + "<br>"+'<button onclick= "goToThankYou()">Delivery complete</button>',
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

            directionsDisplay.setPanel(this.directionPanel.nativeElement);

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

  goToThankYou() {
    this.navCtrl.push(VolThankYouPage);
    this.viewCtrl.dismiss();
  }

  dismissPage() {
    this.viewCtrl.dismiss();
  }

}
