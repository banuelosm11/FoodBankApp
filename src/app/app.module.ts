import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DestinationService } from './services/destination.service';
import { PickUpLocationService} from './services/pickUpLocation.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage, SignupPage, DonatorPage, VolThankYouPage, VolunteerPage, DonateThankYouPage, DestinationPage } from '../pages/pages';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LandingPage,
    VolThankYouPage,
    VolunteerPage,
    DonatorPage,
    DonateThankYouPage,
    DestinationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    LandingPage,
    VolThankYouPage,
    VolunteerPage,
    DonatorPage,
    DonateThankYouPage,
    DestinationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DestinationService,
    PickUpLocationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
