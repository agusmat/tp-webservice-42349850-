import { Component, OnInit } from '@angular/core';
import {NoticiasService} from 'src/app/services/noticias.service';
import {Noticia} from 'src/app/models/noticia'

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  a: any;
  noticia: Noticia;
  noticias: Array<Noticia>;
  

  constructor(private noticia_servicio:NoticiasService) { 
    this.noticia = new Noticia();
    this.noticias = new Array<Noticia>();
    this.cargarNoticias();
  }

  ngOnInit(): void {
    this.noticia_servicio.getNews("soccer").subscribe(
      (res)=> {
        console.log(res);
        this.a=res;
      },
      (err)=>console.log(err)
    );
  }
  public cargarNoticias() {
    this.noticia_servicio.getNews("soccer").subscribe(
      (result) => {
        this.noticias = new Array<Noticia>();
        result['arts'].forEach(element => {
          this.noticia = new Noticia();
          Object.assign(this.noticia, element);
          this.noticias.push(this.noticia);
        });
        console.log(this.noticias);
      },
      error => { alert("error de peticion"); })
  }


}
