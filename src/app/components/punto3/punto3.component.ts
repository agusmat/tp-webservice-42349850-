import { Component, OnInit } from '@angular/core';
import {HoroscopoService} from './../../services/horoscopo.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  a: any;
  constructor(private horoscopo:HoroscopoService) { }

  ngOnInit(): void {
    this.horoscopo.getHoroscopo().subscribe(
      (res)=> {
        console.log(res);
        this.a=res;
      },
      (err)=>console.log(err)
    );
  }

}
