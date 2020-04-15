import { Component, OnInit, OnChanges, /*DoCheck,*/ AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      app-home works!
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, /*DoCheck,*/ AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnChanges(): void{
    console.log('ngOnChanges');
  }
  // ngDoCheck(): void{
  //   console.log('ngDoCheck');
  // }
  ngAfterContentInit(): void{
    console.log('ngAfterCont');
  }
  ngAfterContentChecked(): void{
    console.log('ngAfterCont');
  }
  ngAfterViewInit(): void{
    console.log('ngAfterView');
  }
  ngAfterViewChecked(): void{
    console.log('ngAfterView');
  }
  ngOnDestroy(): void{
    console.log('ngOnDestroy');
  }
}
