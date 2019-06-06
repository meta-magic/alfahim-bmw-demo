import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import {SERVICE_URL} from "../service.constant";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {

    }

    fetch(serviceUrl: string, methodType: string): Observable<any> {
        const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8');
        if (methodType === 'post') {
            return this.http.post(SERVICE_URL.BASE_APP_URL + serviceUrl, { headers });
        } else if (methodType === 'get') {
            return this.http.get(SERVICE_URL.BASE_APP_URL + serviceUrl , { headers });
        }
    }


    post(serviceUrl: string, methodType: string, requestJson: any): Observable<any> {

        const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8');
        if (methodType === 'post') {
            return this.http.post(SERVICE_URL.BASE_APP_URL + serviceUrl, requestJson, { headers });
        } else if (methodType === 'get') {
            return this.http.get(SERVICE_URL.BASE_APP_URL + serviceUrl, { headers });
        }
    }

  fetchLocalData(serviceUrl: string, methodType: string): Observable<any> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8');
    if (methodType === 'post') {
      return this.http.post( serviceUrl, { headers });
    } else if (methodType === 'get') {
      return this.http.get(serviceUrl , { headers });
    }
  }

}
