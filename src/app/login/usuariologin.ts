export class UsuarioLogin {

    constructor(email: string, senha: string) {
      this.email = email;
      this.senha = senha;
    }
  
    email: string;
    senha: string;
  }