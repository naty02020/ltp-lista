export class Numero {
  constructor(valor) {
    this.valor = valor;
  }

  comparar(outroValor) {
    if (this.valor > outroValor) {
      return "maior";
    } else if (this.valor < outroValor) {
      return "menor";
    } else {
      return "igual";
    }
  }
}