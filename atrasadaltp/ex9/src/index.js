import { ContaBancaria } from "./models/ContaBancaria.js";

const conta = new ContaBancaria("Ana");

conta.depositar(500);
conta.sacar(200);

console.log("Saldo:", conta.saldo);