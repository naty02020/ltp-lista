export class Intervalo {
  constructor(inicio, fim) {
    this.inicio = inicio;
    this.fim = fim;
  }

  contem(numero) {
    return numero >= this.inicio && numero <= this.fim;
  }
}