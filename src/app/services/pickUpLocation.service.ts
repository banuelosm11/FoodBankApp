import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';

const URL_FOODPICKUPLOCATIONS = '../assets/data/pickUpLocation.json'


@Injectable()
export class PickUpLocationService {
	constructor(public _http: Http) {}

	// getPickUpLocations() {
	// 	return this._http.get(URL_FOODPICKUPLOCATIONS)
	// 		.map((response:Response) => response.json())
	// 		.toPromise();
	// }

	getPickUpLocations() {
		return this._http.get(URL_FOODPICKUPLOCATIONS)
						.map(res => res.json());
			// .map((response:Response) => response.json())
			// .catch(this._handlerError);
	}

	// _handlerError(err: any, caught: Observable<any>){
	// 	console.log(err);	//log this somewhere and format the message well for devs
	// 	return Observable.throw(err); // our opportunity to customize this error
	// }
}
