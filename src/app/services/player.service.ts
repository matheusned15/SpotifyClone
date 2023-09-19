import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { newMusica } from '../Common/factories';
import { SpotifyService } from './spotify.service';
import { IMusica } from '../interfaces/IMusica';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  musicaAtual = new BehaviorSubject<IMusica>(newMusica());
  timerId: any = null;

  isPlay: boolean = false;

  constructor(private spotifyService: SpotifyService) {
    this.obterMusicaAtual();
  }

  async obterMusicaAtual() {
    clearTimeout(this.timerId);

    // Obtenho a musica
    const musica = await this.spotifyService.obterMusicaAtual();
    this.definirMusicaAtual(musica);

    // Causo loop
    this.timerId = setInterval(async () => {
      await this.obterMusicaAtual();
    }, 5000);
  }

  definirMusicaAtual(musica: IMusica) {
    this.musicaAtual.next(musica);
  }

  async voltarMusica() {
    await this.spotifyService.voltarMusica();
  }

  async proximaMusica() {
    await this.spotifyService.proximaMusica();
  }

  async play() {
    await this.spotifyService.play();
  }

  async pause() {
    await this.spotifyService.pause();
  }
}
