import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Bd } from "../../bd.service";
import * as firebase from "firebase";
@Component({
  selector: "app-incluir-publicacao",
  templateUrl: "./incluir-publicacao.component.html",
  styleUrls: ["./incluir-publicacao.component.css"],
})
export class IncluirPublicacaoComponent implements OnInit {
  public email: string;

  public formulario: FormGroup = new FormGroup({
    titulo: new FormGroup(null),
  });

  constructor(private bd: Bd) {}

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email;
    });
  }

  public publicar(): void {
    this.bd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
    });
  }
}
