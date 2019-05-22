const fs = require('fs');
const axios = require('axios');

const Description = require('./Decrypt');
const Sha1 = require('./Sha1');

axios
  .get("https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=ed1f51f2b710cd1baff67c55faca51ded1129fa8")
  .then(({data}) => { 
    const { cifrado, numero_casas } = data;
    let result = {}
    result.decifrado = new Description(cifrado, numero_casas);
    return Object.assign(data, result.decifrado);
  })
  .then(data => {
    let test = {}
    test.resumo_criptografico = new Sha1(data.decifrado);
    return Object.assign(data, test.resumo_criptografico);
  })
  .then(result => {
    fs.writeFileSync('answer.json', JSON.stringify(result))
  })
  .catch(err => console.log(err))