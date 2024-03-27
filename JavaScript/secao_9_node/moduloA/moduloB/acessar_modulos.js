//O nome da constante deve ser igual ao da pasta de destino 
const modulo_A = require('../../moduloA')
console.log(modulo_A.ola)

//O nome da constante deve ser igual ao da pasta de destino
const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./moduloC/index')
console.log(c.ola2)

// const http = require('http')
// http.createServer((requi,resp) =>{
//     resp.write('BOM.BOM. dia DIA')
//     resp.end()
// }).listen(8080)