import * as firebase from "firebase";
class Bd {
  public publicar(publicacao: any): void {
    firebase
      .database()
      .ref(`publicacoes/${btoa(publicacao.email)}`)
      .push({ titulo: publicacao.titulo });
  }
}

export { Bd };
