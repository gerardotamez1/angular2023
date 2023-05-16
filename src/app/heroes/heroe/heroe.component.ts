import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {

  public name: string = "ironman";
  public age: number = 40;

 
  get capitalizedName():string{
      return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = "Spiderman"
  }

  changeAge():void{
    this.age = 23
  }

    resetForm():void{
        this.name = "ironman";
        this.age = 40;
    }





}

