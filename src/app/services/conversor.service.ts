import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class ExchangeService {


  constructor(private _http: HttpClient) {}
getExchange(from:string,to:string, amount:number):Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
    'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '4f1b2e5f4dmsh2bb7a7575eb569fp15c6a4jsn817406c7fc37'
    })
    };
  return this._http.get(`https://fixer-fixer-currency-v1.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`,httpOptions);
  }
}