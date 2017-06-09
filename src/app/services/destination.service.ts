import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

const URL_HUNGERRELIEFLOCATIONS = '../../assets/data/hungerReliefLocations.json'

@Injectable()
export class DestinationService {
	constructor(private _http: Http) {}

	getDestinations() {
		return this._http.get(URL_HUNGERRELIEFLOCATIONS)
			.map((response:Response) => response.json())
			.toPromise();
	}

	// getCustomers_RxObservable() {
	// 	return this._http.get(URL_HUNGERRELIEFLOCATIONS)
	// 		.map((response:Response) => response.json())
	// 		.catch(this._handlerError);
	// }

	_handlerError(err: any, caught: Observable<any>){
		console.log(err);	//log this somewhere and format the message well for devs
		return Observable.throw(err); // our opportunity to customize this error
	}
}