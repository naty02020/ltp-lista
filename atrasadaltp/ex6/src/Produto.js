export class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  estaCaro() {
    return this.preco > 100;
  }
}