import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DestinationService } from './services/destination.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage, SignupPage, DonatorPage, VolThankYouPage, VolunteerPage, DonateThankYouPage, DestinationPage } from '../pages/pages';
import { AgmCoreModule } from 'angular2-google-maps/core';
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD29YfpbLJoYiIinHsLksHN8FnH6UdOZ00'
    }),
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
