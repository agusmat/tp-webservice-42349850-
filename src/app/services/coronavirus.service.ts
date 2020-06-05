import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronavirusService {

  constructor(private _http: HttpClient) { }
  public getCovidMundo():Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com',
      'X-RapidAPI-Key': '4f1b2e5f4dmsh2bb7a7575eb569fp15c6a4jsn817406c7fc37'
      })
      };
    return this._http.get(`https://covid-19-tracking.p.rapidapi.com/v1`,httpOptions);
    }
    public getCovidPais(pais: string): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
          "x-rapidapi-key": "4f1b2e5f4dmsh2bb7a7575eb569fp15c6a4jsn817406c7fc37",
        }),
      };
      return this._http.get(
        `https://covid-19-tracking.p.rapidapi.com/v1/${pais}`,
        httpOptions
      );
    }
  }

