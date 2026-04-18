export class Contador {
  constructor() {
    this.valor = 0;
  }

  incrementar() {
    this.valor++;
  }

  mostrar() {
    return `Valor atual: ${this.valor}`;
  }
}