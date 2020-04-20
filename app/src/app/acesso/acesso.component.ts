import { animate } from "@angular/animations";
import { transition } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { trigger, state, style, keyframes } from "@angular/animations";

@Component({
  selector: "app-acesso",
  templateUrl: "./acesso.component.html",
  styleUrls: ["./acesso.component.css"],
  animations: [
    trigger("animacao-banner", [
      state(
        "criacao",
        style({
          opacity: 1,
        })
      ),
      transition("void => criado", [
        style({ opacity: 0, trasform: "translity(-50px, 0px)" }),
        animate("500ms 0s ease-in-out"),
      ]),
    ]),
    trigger("animacao-painel", [
      state(
        "criacao",
        style({
          opacity: 1,
        })
      ),
      transition("void => criado", [
        style({ opacity: 0, trasform: "translity(-50px, 0px)" }),
        animate("1.5s 0s ease-in-out", keyframes([
          style({ offseat: 0.15, opacity: 1, tranform: 'translateX(0)' }),
          style({ offseat: 0.86, opacity: 1, tranform: 'translateX(0)' }),
          style({ offseat: 0.88, opacity: 1, tranform: 'translateY(-10px)' }),
          style({ offseat: 0.90, opacity: 1, tranform: 'translateY(10px)' }),
          style({ offseat: 0.92, opacity: 1, tranform: 'translateY(-10px)' }),
          style({ offseat: 0.94, opacity: 1, tranform: 'translateY(10px)' }),
          style({ offseat: 0.96, opacity: 1, tranform: 'translateY(-10px)' }),
          style({ offseat: 0.98, opacity: 1, tranform: 'translateY(10px)' }),
          style({ offseat: 1, opacity: 1, tranform: 'translateX(0)' })
        ])),
      ]),
    ]),
  ],
})
export class AcessoComponent implements OnInit {
  public estadoBanner: string = "criado";
  public estadoPainel: string = "criado";
  public cadastro: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public exibirPainel(event: string) {
    this.cadastro = event === "cadastro" ? true : false;
  }

  public inicioDaAnimacao(): void {

  }

  public fimDaAnimacao(): void {

  }
}
