import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';


@NgModule({
   
    declarations:[
        ListComponent,
        HeroeComponent
    ],
    exports:[
        ListComponent,
        HeroeComponent
    ],
    imports:[
        CommonModule
    ]





})


export class HeroesModule{

}