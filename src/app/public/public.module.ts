import { LoginComponent } from './login/containers/login.component';
import { HomeComponent } from './home/containers/home.component';
import { PublicComponent } from './public.component';
import { SharedModule } from './../core/shared/shared.module';
import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { PublicService } from './public.service';

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
    providers:[
        PublicService,
    ]
})

export class PublicModule {
    constructor(){}
}