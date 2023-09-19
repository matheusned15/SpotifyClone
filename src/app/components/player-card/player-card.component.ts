import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    faAd,
    faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';
import { newMusica } from 'src/app/Common/factories';
import { IMusica } from 'src/app/interfaces/IMusica';
import { PlayerService } from 'src/app/services/player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
})
export class PlayerCardComponent implements OnInit, OnDestroy {
  musica: IMusica = newMusica();
  subs: Subscription[] = [];

  isPlaying: boolean = false;

  // Icones
  anteriorIcone = faStepBackward;
  proximoIcone = faStepForward;
  playIcone = faPlay;
  pauseIcone = faPause;
  icone = faPlay;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.obterMusicaTocando();
  }

  obterMusicaTocando() {
    const sub = this.playerService.musicaAtual.subscribe((musica) => {
      this.musica = musica;
    });
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  voltarMusica() {
    this.playerService.voltarMusica();
  }

  proximaMusica() {
    this.playerService.proximaMusica();
  }

  async play() {
    if (this.isPlaying) {
      await this.playerService.pause();
      this.isPlaying = false;
      this.icone = this.playIcone;
    } else {
      await this.playerService.play();
      this.isPlaying = true;
      this.icone = this.pauseIcone;
    }
  }
}
