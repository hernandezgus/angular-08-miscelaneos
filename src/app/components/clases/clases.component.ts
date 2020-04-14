import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  alerta = 'alert-danger';
  propiedades: any = {
    colorDanger: false
  };

  cargando = false;

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar() {
    this.cargando = true;
    setTimeout( () => this.cargando = false, 3000);
  }
}
