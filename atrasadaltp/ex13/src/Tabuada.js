export class Tabuada {
  constructor(numero) {
    this.numero = numero;
  }

  mostrarTabuada() {
    let resultado = "";

    for (let i = 1; i <= 10; i++) {
      resultado += `${this.numero} x ${i} = ${this.numero * i}\n`;
    }

    return resultado;
  }
}