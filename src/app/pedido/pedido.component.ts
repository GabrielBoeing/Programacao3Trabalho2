import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '../../../node_modules/@angular/forms';

export interface PeriodicElement {
  cardapio: string;
  position: number;
  valor: number;
  nome: string;
  endereco: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, cardapio: 'Bacon', valor: 19.50, nome: 'William', endereco: 'Rua São Paulo, 345'},
  {position: 2, cardapio: 'Classico', valor: 15.00, nome: 'William', endereco: 'Rua São Paulo, 345'},
  {position: 3, cardapio: 'Cheeseburguer', valor: 17.00, nome: 'Gabriel', endereco: 'Rua São Paulo, 345'},
  {position: 4, cardapio: 'Duplo', valor: 20.00, nome: 'Gabriel', endereco: 'Rua São Paulo, 345'},
];

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'cardapio', 'valor', 'nome', 'endereco'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  nome = new FormControl('', [Validators.required]);
  endereco = new FormControl('', [Validators.required]);

  getErrorMessageNome() {
    return this.nome.hasError('required') ? 'Campo obrigatório' : '';               
  }

  getErrorMessageEndereco() {
    return this.endereco.hasError('required') ? 'Campo obrigatório' : '';
  }

}
