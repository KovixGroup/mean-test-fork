import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Inject} from 'angular2/core';

export class User{
	private loggedInUser:User;
	
	@Inject(Http) http;
	firstName:string;
	lastName:string;
	email:string;
	username:string;
	
	constructor(userData){
		
	}
	
	signin(credentials, successCallback, errorCallback){
		this.http.post('/api/auth/signup', credentials).suscribe(
			response => this.loggedInUser = new User(response),
			msg => errorCallback(msg)
		)
	}
	
	signout(){
		
	}
	
	changeUserPassword(passwordDetails, successCallback, errorCallback) {
      this.http.post('/api/users/password', passwordDetails).suscribe(
	  	successCallback,
		msg => errorCallback(msg)
	  );
	}
	
	public getCurrentUser(){
		return this.loggedInUser;
	}
}