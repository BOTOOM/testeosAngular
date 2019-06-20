import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  palabra: string;
  texto_ingresado: string;
  mundo = 'mundo';
  visible: boolean;
  numero = [];
  Heroes = [];
  Personajes = [];

  constructor(
    private serviciosHeroes: HeroesService,
  ) {
    this.palabra = `hola ${this.mundo} , no se que mas escribir`;
    console.log(this.palabra);
    // this.prueba2();
    this.visible = false;
    this.iteracion();
  }

  ngOnInit() {
  }

  prueba() {
    console.log('entro a la funcion de preuba');
    this.Heroes = this.serviciosHeroes.getHeroes();
    console.log(`heores`);
    console.log(this.Heroes);
  }

  prueba2() {
    console.log('entro a la segunda funcion');
  }

  mostrar() {
    this.visible = !this.visible;
  }

  iteracion() {
    for (let i = 0; i < 10; i++) {
      // console.log(i);
      this.numero.push(i);
    }
    // console.log(this.numero);
  }

  getPersona() {
    this.serviciosHeroes.getPersonajes().subscribe( datos => {
      console.log(datos);
    }, (error_service) => {
      console.log(error_service);
    });
  }

}
