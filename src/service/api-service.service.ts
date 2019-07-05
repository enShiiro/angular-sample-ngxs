import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = 'http://10.0.100.162:8080';


  constructor(private http: HttpClient) { }


  loggedIn(){
    return !!localStorage.getItem('token');
  }

  login(username: string, password: string) {
    console.log('useranme and password: ', username + ' ' + password);

    return this.http.post(this.url + "/login", { username: username, password: password }, { observe: 'response' })
  }
}
