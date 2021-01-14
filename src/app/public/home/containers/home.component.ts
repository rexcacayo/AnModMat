import { PublicService } from './../../public.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:[ './home.component.scss']
})

export class HomeComponent implements OnInit {
    
    characters:any;
    continents:any;
    
    constructor(private publicServices: PublicService){}

    ngOnInit(){
        this.getCharacters();
        this.getContinents();
    }

    getCharacters(){
        this.publicServices.getCharacters().subscribe(
            response => this.characters = response,
            error => console.log(error)
        )
    }

    getContinents(){
        this.publicServices.getContinents().subscribe(
            response => this.continents = response,
            error => console.log(error)
        )
    }

}