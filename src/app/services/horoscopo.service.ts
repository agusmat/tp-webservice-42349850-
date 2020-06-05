import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http:HttpClient) { }

  getHoroscopo():Observable<any> {
    return this._http.get(`https://api.adderou.cl/tyaas/`);
    }
}
