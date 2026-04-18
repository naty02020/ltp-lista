export class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(percentual) {
    const desconto = this.preco * (percentual / 100);
    this.preco -= desconto;
    return this.preco;
  }
}