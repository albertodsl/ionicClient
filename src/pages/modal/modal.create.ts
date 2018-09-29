import { NavParams, Platform, ViewController } from "ionic-angular";
import { Component } from '@angular/core';
import { Pessoa } from "../../model/pessoa";
import { PessoaService } from "../../provider/pessoa.service";
import { Telefone } from "../../model/telefone";

@Component({
  selector: 'page-create',
  templateUrl: './modal.create.html'
})
export class ModalCreate {
  pessoa: Pessoa;
  telefone1: Telefone;
  telefone2: Telefone;
  msg: string = '';

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public service: PessoaService
  ) {
    this.pessoa = new Pessoa();
    this.telefone1 = new Telefone();
    this.telefone2 = new Telefone();
  }

  async gravar() {
    this.pessoa.telefones.push(this.telefone1);
    this.pessoa.telefones.push(this.telefone2);
    this.service.postPessoa(this.pessoa).subscribe((res) => {
      this.msg = JSON.stringify(res.text);
    });
    alert('Dados Gravados');
    this.dismiss();
    window.location.reload();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}