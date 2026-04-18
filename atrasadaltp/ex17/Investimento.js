export class Investimento {
  constructor(capital, taxa) {
    this.capital = capital;
    this.taxa = taxa; // ex: 0.10 = 10%
  }

  calcularJuros(anos) {
    return this.capital * this.taxa * anos;
  }
}