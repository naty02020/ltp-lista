export class Saudacao {
  constructor(nome, horario) {
    this.nome = nome;
    this.horario = horario;
  }

  saudar() {
    if (this.horario < 12) {
      return `Bom dia, ${this.nome}!`;
    } else if (this.horario < 18) {
      return `Boa tarde, ${this.nome}!`;
    } else {
      return `Boa noite, ${this.nome}!`;
    }
  }
}