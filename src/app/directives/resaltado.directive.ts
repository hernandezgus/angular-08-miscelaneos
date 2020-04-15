import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro(){
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio(){
    // this.el.nativeElement.style.backgroundColor = null;
    this.resaltar( null );
  }

  private resaltar( color: string ) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
