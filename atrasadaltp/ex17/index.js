import { Investimento } from "./models/Investimento.js";

const inv = new Investimento(1000, 0.10);

const juros = inv.calcularJuros(2);

console.log("Juros em 2 anos:", juros);