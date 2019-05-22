const sha1 = require('js-sha1');

class Sha1 {
  
  constructor(resumo_criptografico) {
    this.resumo_criptografico = resumo_criptografico;
    this._resumoCriptografico();
  }
  
  _resumoCriptografico() {
    return this.resumo_criptografico = sha1(this.resumo_criptografico);
  }

}

module.exports = Sha1;