class Decrypt {

  constructor(cifrado, numero_casas) {
    this.decifrado = cifrado;
    this.numero_casas = numero_casas
    this._decryptCode();
  }

  get decryptCode() {
    return this.decifrado;
  }

  _decryptCode() {
    this.decifrado = this.decifrado.split("").map(letra => {
      if(letra != " " && letra !="." && letra != ",") {
        const position = letra.charCodeAt();
        let newPosition = position - this.numero_casas;
    
        if(newPosition < 97) {
          newPosition = 97 - newPosition;
          newPosition = 122 - newPosition + 1;
        }
        
        return String.fromCharCode(newPosition)
      } else {
        return letra
      }
    }).join("");
  }

}

module.exports = Decrypt