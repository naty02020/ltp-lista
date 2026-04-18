export class Mensageiro {
  constructor(remetente) {
    this.remetente = remetente;
  }

  enviar(destinatario, mensagem) {
    return `De: ${this.remetente}
Para: ${destinatario}
Mensagem: ${mensagem}`;
  }
}