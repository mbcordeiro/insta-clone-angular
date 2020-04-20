import { Usuario } from "./acesso/usuario.model";
import * as firebase from "firebase";

class Autenticacao {
  public cadastroUsuario(usuario: Usuario): void {
    firebase
      .auth()
      .createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((respota: any) => {
        delete usuario.senha;
        firebase
          .database()
          .ref(`usuario_detalhe/${btoa(usuario.email)}`)
          .set(usuario);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }

  public autenticar(email: string, senha: string): void {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((resposta: any) => {})
      .catch((error: Error) => console.log(error));
  }
}

export { Autenticacao };
