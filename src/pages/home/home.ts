import { PessoaService } from './../../provider/pessoa.service';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Pessoa } from '../../model/pessoa';
import { Telefone } from '../../model/telefone';
import { ModalUpdate } from '../modal/modal.update';
import { ModalCreate } from '../modal/modal.create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pessoa: Pessoa;
  pessoas: Pessoa[];
  telefone1: Telefone;
  telefone2: Telefone;
  msg: string;

  constructor(public service: PessoaService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.pessoas = [];
    this.telefone1 = new Telefone();
    this.telefone2 = new Telefone();
    this.listar();
  }

  listar() {
    this.service.getPessoas().subscribe((res) => {
      this.pessoas = res;
    })
  }

  listarPorId(id: number) {
    this.service.getPessoaById(id).subscribe((res) => {
      this.pessoa = res;
    })
  }

  async excluir(id: number) {
    this.service.deletePessoa(id).subscribe((res) => {
      this.msg = JSON.stringify(res.text);
    });
    this.listar();
    alert('Dados Excluídos');
    window.location.reload();
  }

  openUpdate(pessoa: Pessoa) {
    let modal = this.modalCtrl.create(ModalUpdate, { 'pessoa': pessoa });
    console.log(pessoa.nomePessoa);
    modal.present();
    this.listar();
  }

  openCreate() {
    let modal = this.modalCtrl.create(ModalCreate);
    modal.present();
    this.listar();
  }

}
