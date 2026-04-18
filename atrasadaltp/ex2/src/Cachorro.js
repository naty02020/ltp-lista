export class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  mostrarDados() {
    return `Nome: ${this.nome}, Idade: ${this.idade}`;
  }
}