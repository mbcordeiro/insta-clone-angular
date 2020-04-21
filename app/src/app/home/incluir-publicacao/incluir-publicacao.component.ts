import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Bd } from "../../bd.service";
import * as firebase from "firebase";
import { Progresso } from "src/app/progresso.service";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Subject } from "rxjs";
@Component({
  selector: "app-incluir-publicacao",
  templateUrl: "./incluir-publicacao.component.html",
  styleUrls: ["./incluir-publicacao.component.css"],
})
export class IncluirPublicacaoComponent implements OnInit {
  public email: string;
  public imagem: any;
  public progressoPublicacao: string = "pendente";
  public porcentagemUpload: number;

  public formulario: FormGroup = new FormGroup({
    titulo: new FormGroup(null),
  });

  constructor(private bd: Bd, private progressso: Progresso) {}

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email;
    });
  }

  public publicar(): void {
    this.bd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem[0],
    });

    let acompanhamentoUpload = Observable.interval(1500);
    let continua = new Subject();
    continua.next(true);

    acompanhamentoUpload.takeUntil(continua).subscribe(() => {
      this.progressso.status;
      this.progressso.estado;
      this.progressoPublicacao = "andamento";
      this.porcentagemUpload = Math.round((this.progressso.estado.bytesTransferred / this.progressso.estado.totalBytes) * 100)
      if (this.progressso.status === "concluido") {
        continua.next(false);
      }
    });
  }

  preparaImagemUpload(event: Event): void {
    this.imagem = (<HTMLInputElement>event.target).files;
  }
}
