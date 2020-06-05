import { Component, OnInit } from '@angular/core';
import { CoronavirusService } from "src/app/services/coronavirus.service";

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  fallecidos: boolean = false;
  confirmados: boolean = false;
  recuperados: boolean = false;
  filtrado: boolean;
  filtradof: boolean = false;
  filtradoc: boolean = false;
  filtrador: boolean = false;
  a: any;
  paises: Array<string>;
  constructor(private coronavirusService:CoronavirusService) {
    this.paises=new Array<string>();
   }

  ngOnInit() {
    this.filtrado = false;
    this.coronavirusService.getCovidMundo().subscribe(
      (res) => {
        this.paises = res;
        console.log(res);
      },
      (err) => {
        console.log("error", err);
      }
    );
  }
  consulta = (country: HTMLSelectElement) => {
    this.filtrado = true;
    this.coronavirusService.getCovidPais(country.value).subscribe(
      (res) => {
        this.a = res;
        this.filtradoFallecido();
        this.filtradoRecuperado();
        this.filtradoCasos();
        console.log(this.a);
      },
      (err) => {
        console.log("error", err);
      }
    );
  };
  change = () => {
    this.fallecidos == false
      ? (this.fallecidos = true)
      : (this.fallecidos = false);
  };
  changeRecuperados = () => {
    this.recuperados == false
      ? (this.recuperados = true)
      : (this.recuperados = false);
  };
  changeCasos = () => {
    this.confirmados == false
      ? (this.confirmados = true)
      : (this.confirmados = false);
  };
  filtradoFallecido = () => {
    this.fallecidos == true
      ? (this.filtradof = true)
      : (this.filtradof = false);
  };
  filtradoRecuperado = () => {
    this.recuperados == true
      ? (this.filtrador = true)
      : (this.filtrador = false);
  };
  filtradoCasos = () => {
    this.confirmados == true
      ? (this.filtradoc = true)
      : (this.filtradoc = false);
  };


}
