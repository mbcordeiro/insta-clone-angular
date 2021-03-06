import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Progresso } from "./progresso.service";

@Injectable()
class Bd {
  constructor(private progresso: Progresso) {}

  public publicar(publicacao: any): void {
    firebase
      .database()
      .ref(`publicacoes/${btoa(publicacao.email)}`)
      .push({ titulo: publicacao.titulo, url_imagem: nomeImagem })
      .then((resposta: any) => {
        let nomeImagem = resposta.key;

        firebase
          .storage()
          .ref()
          .child(`imagens/${nomeImagem}`)
          .put(publicacao.imagem)
          .on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot: any) => {
              this.progresso.status = "andamento";
              this.progresso.estado = snapshot;
            },
            (error) => {
              this.progresso.status = "erro";
            },
            () => {
              this.progresso.status = "concluido";
            }
          );
      });
  }
}

export { Bd };
