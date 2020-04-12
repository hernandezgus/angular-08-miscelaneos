import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanoFuente">
      Hola Mundo - Esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="tamanoFuente = tamanoFuente + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamanoFuente = tamanoFuente - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamanoFuente = 20;
  constructor() { }

  ngOnInit(): void {
  }

}
