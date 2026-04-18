import { Usuario } from "./models/Usuario.js";


const user = new Usuario("Ana", "teste@email.com");


console.log(user.validarEmail());