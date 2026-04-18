import { Temperatura } from "./models/Temperatura.js";

const temp = new Temperatura(25);

console.log(temp.converterParaFahrenheit() + "°F");