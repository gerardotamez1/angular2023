import { NgModule } from '@angular/core';
import { Countercomponent } from './counter/counter.component';


@NgModule({
   
    declarations:[
        Countercomponent
    ],
    exports:[
        Countercomponent
    ]





})


export class CounterModule{

}