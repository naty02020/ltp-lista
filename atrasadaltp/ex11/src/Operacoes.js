export class Operacoes {
  calcular(a, b, operacao) {
    if (operacao === "soma") {
      return `${a} + ${b} = ${a + b}`;
    } 
    else if (operacao === "subtrai") {
      return `${a} - ${b} = ${a - b}`;
    } 
    else if (operacao === "multiplica") {
      return `${a} * ${b} = ${a * b}`;
    } 
    else if (operacao === "divide") {
      return `${a} / ${b} = ${a / b}`;
    } 
    else {
      return "Operação inválida";
    }
  }
}