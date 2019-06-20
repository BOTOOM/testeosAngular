import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.palabra = `hola ${this.mundo} , no se que mas escribir`;
    console.log(this.palabra);
    this.prueba2();
    this.visible = false;
    this.iteracion();
  }

  ngOnInit() {
  }

  prueba() {
    console.log('entro a la funcion de preuba');
    this.prueba3();
  }

  prueba2() {
    console.log('entro a la segunda funcion');
  }

  prueba3() {
    console.log('entro a la tercera funcion');
  }

  mostrar() {
    this.visible = !this.visible;
  }

  iteracion() {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      this.numero.push(i);
    }
    console.log(this.numero);
  }

}
