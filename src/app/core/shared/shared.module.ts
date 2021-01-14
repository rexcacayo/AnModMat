import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    imports:[
        HttpClientModule,
        RouterModule,
        MatTabsModule
    ],
    declarations:[
        NotFoundComponent
    ],
    exports:[
        HttpClientModule,
        NotFoundComponent,
        RouterModule,
        MatTabsModule
    ],
    
    providers:[]
})

export class SharedModule {
    constructor(){}
}