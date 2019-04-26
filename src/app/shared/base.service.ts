import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private _http: HttpClient) { }

  get(url: string) {
    const auth = localStorage.getItem('authorization');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization':  auth
    });
    let options = { headers: headers };
    return this._http.get(environment.apiEndpoint + url, options);
  }

  post(url: string, body: any) {
    const auth = localStorage.getItem('authorization');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization':  auth
    });
    let options = { headers: headers };
    return this._http.post(environment.apiEndpoint + url, body, options);
  }

  patch(url: string, body: any) {
    const auth = localStorage.getItem('authorization');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':  auth
    });
    let options = { headers: headers };
    return this._http.patch(environment.apiEndpoint + url, body, options);
  }

  postResponse(url: string, body: any) {
    return this._http.post(environment.apiEndpoint + url, body, {observe: 'response'});
  }

  getResponse(url: string) {
    const auth = localStorage.getItem('authorization');
    let headers = new HttpHeaders({
      'Authorization':  auth
    });
    let options = { headers: headers };
    return this._http.get(environment.apiEndpoint + url, { observe: 'response', headers: headers, responseType:'blob' });
  }

}
