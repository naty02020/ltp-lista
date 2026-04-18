import { Contador } from "./models/Contador.js";

const contador = new Contador();

contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log(contador.mostrar());