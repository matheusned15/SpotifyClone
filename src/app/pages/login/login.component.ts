import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private SpotifyService: SpotifyService, private router: Router) {}

  ngOnInit(): void {
    this.verificarTokenUrlCallback();
  }

  verificarTokenUrlCallback() {
    const token = this.SpotifyService.obterTokenUrlCallback();
    if (!!token) {
      this.SpotifyService.definirAcessToken(token);
      this.router.navigate(['player/home']);
    }
  }

  abrirPaginaLogin() {
    window.location.href = this.SpotifyService.obterUrlLogin();
  }
}
