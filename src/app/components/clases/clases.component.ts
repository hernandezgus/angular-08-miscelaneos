import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  alerta = 'alert-danger';
  propiedades: object = {
    colorDanger: false
  };
  constructor() { }

  ngOnInit(): void {
  }

}
