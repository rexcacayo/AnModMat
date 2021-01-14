import { LoginComponent } from './login/containers/login.component';
import { HomeComponent } from './home/containers/home.component';
import { PublicComponent } from './public.component';
import { SharedModule } from './../core/shared/shared.module';
import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
    imports:[
        PublicRoutingModule,
        SharedModule
    ],
    declarations:[
        PublicComponent,
        HomeComponent,
        LoginComponent
    ],
    exports:[],
    providers:[]
})

export class PublicModule {
    constructor(){}
}