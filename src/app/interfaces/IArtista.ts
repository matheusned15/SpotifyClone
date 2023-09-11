import { IMusica } from "./../interfaces/IMusica";

export interface IArtista {
  id: string,
  nome: string,
  imagemUrl: string,
  musicas?: IMusica[]
}