import { Aluno } from "./models/Aluno.js";

const aluno = new Aluno("Carlos");

const media = aluno.calcularMedia(7, 8, 9);

console.log("Média:", media);