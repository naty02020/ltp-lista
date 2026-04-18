import { Equacao } from "./models/Equacao.js";

const eq = new Equacao(1, -5, 6);

console.log("Delta:", eq.calcularDelta());