export class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  idadeEmDias() {
    return `${this.nome} tem ${this.idade * 365} dias de vida`;
  }
}