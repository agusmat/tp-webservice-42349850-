import { Component, OnInit } from '@angular/core';
import {ExchangeService} from 'src/app/services/conversor.service';


@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  from:string;
  to:string;
  a:any;
  constructor(private conversor:ExchangeService) {
    
   }
  
  ngOnInit(): void {
    this.conversor.getExchange("USD","ARS",10).subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
    );
  }
  public convertirdivisa(from:string,to:string,amount:HTMLInputElement){
    return this.conversor.getExchange(this.from,this.to,amount.valueAsNumber).subscribe(
      (res)=>{console.log(res);
      this.a=res},
      (err)=>{console.log(err)}
    );
  }
}
