import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    
    constructor(private SpotifyService: SpotifyService) {}

    ngOnInit(): void {
        
    }

    abrirPaginaLogin() {
       window.location.href =  this.SpotifyService.obterUrlLogin();
    }
}