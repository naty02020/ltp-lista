export class Texto {
  constructor(conteudo) {
    this.conteudo = conteudo;
  }

  repetir(vezes) {
    return this.conteudo.repeat(vezes);
  }
}