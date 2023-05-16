import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

 public heroNames: string[] = ['spiderman', 'Ironamn', 'Hulk', 'She hulk', 'Thor'];
public deletedHero?:string;

removeLastHero():void{
  this.deletedHero = this.heroNames.pop();
}




}
