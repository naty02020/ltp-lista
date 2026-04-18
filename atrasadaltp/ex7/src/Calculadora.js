export class Calculadora {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  somar() {
    return this.num1 + this.num2;
  }

  subtrair() {
    return this.num1 - this.num2;
  }

  multiplicar() {
    return this.num1 * this.num2;
  }

  dividir() {
    return this.num1 / this.num2;
  }
}