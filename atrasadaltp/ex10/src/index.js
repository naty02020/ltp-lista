import { Mensageiro } from "./models/Mensageiro.js";

const msg = new Mensageiro("Ana");

console.log(msg.enviar("João", "Olá, tudo bem?"));