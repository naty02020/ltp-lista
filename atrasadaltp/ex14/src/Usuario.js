export class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  validarEmail() {
    if (this.email.includes("@") && this.email.includes(".")) {
      return "Email válido";
    } else {
      return "Email inválido";
    }
  }
}