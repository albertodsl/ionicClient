import { Pessoa } from './../../model/pessoa';
import { NavParams, Platform, ViewController } from "ionic-angular";
import { Component } from '@angular/core';
import { PessoaService } from "../../provider/pessoa.service";
import { Telefone } from "../../model/telefone";

@Component({
  selector: 'page-update',
  templateUrl: './modal.update.html'
})
export class ModalUpdate {
  pessoa: Pessoa;
  telefone1: Telefone;
  telefone2: Telefone;
  msg: string = "";

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public service: PessoaService
  ) {
    this.pessoa = new Pessoa();
    this.telefone1 = new Telefone();
    this.telefone2 = new Telefone();
    this.setPessoa();
  }

  setPessoa() {
    console.log(this.params.get("pessoa"));
    this.pessoa = this.params.get("pessoa");
  }

  async atualizar() {
    this.pessoa.telefones.push(this.telefone1);
    this.service.putPessoa(this.pessoa).subscribe((res) => {
      this.msg = JSON.stringify(res.text);
    });
    this.dismiss();
    alert('Dados Atualizados');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}