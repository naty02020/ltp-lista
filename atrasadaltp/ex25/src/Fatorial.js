export class Fatorial {
  constructor(numero) {
    this.numero = numero;
  }

  calcular() {
    let resultado = 1;

    for (let i = 1; i <= this.numero; i++) {
      resultado *= i;
    }

    return resultado;
  }
}