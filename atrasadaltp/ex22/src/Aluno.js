export class Aluno {
  constructor(nome) {
    this.nome = nome;
  }

  calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
  }
}