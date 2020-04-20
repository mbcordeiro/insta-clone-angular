import { animate } from "@angular/animations";
import { transition } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { trigger, state, style } from "@angular/animations";

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
        style({ opacity: 0, trasform: 'translity(-50px, 0px)' }),
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
        style({ opacity: 0, trasform: 'translity(-50px, 0px)' }),
        animate("500ms 0s ease-in-out"),
      ]),
    ]),
  ],
})
export class AcessoComponent implements OnInit {
  public estadoBanner: string = 'criado'
  public estadoPainel: string = 'criado'

  constructor() {}

  ngOnInit(): void {}
}
