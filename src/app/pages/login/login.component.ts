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
        this.verificarTokenUrlCallback();
    }


    verificarTokenUrlCallback(){
        const token = this.SpotifyService.obterTokenUrlCallback();
        if(!!token){
            this.SpotifyService.definirAcessToken(token);
        }
    }

    abrirPaginaLogin() {
       window.location.href =  this.SpotifyService.obterUrlLogin();
    }
}