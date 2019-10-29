import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { UsuarioLogin } from './usuariologin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'Campo obrigatório' :
        this.email.hasError('email') ? 'Email inválido' : '';
         
  }

  getErrorMessageSenha() {
    return this.senha.hasError('required') ? 'Campo obrigatório' : '';
  }


}




