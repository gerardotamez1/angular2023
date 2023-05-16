import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `<h1>{{title}}</h1>
    <hr>
    <p>{{counter}}</p>
    
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>`
})

export class Countercomponent  {
    constructor() { }
    public title:string = 'Hola mundo';
    public counter:number = 10;
  
    increaseBy(parametro:number){
        this.counter += parametro;
    }
  
    reset(){
      this.counter = 10;
  }
   
}