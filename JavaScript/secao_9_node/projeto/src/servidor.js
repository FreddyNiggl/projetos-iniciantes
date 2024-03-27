const porta = 3003

const express = require('express')
const app = express()
const bodyparser = require ('body-parser')
const banco_de_dados = require('./banco_de_dados')

app.use(bodyparser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(banco_de_dados.get_produtoS())
})


app.get('/produtos/:id', (req, res, next) => {
    res.send(banco_de_dados.get_produto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = banco_de_dados.salvar_produto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})
// app.get('/produtos', (req, res, next) => {
//     console.log('Executando Middleware 1 ...')
//     next()
// })
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// app.get('/produtos', (req, res, next) => { 
//     res.send({nome: 'Notebook', preco: 123.45}) //a funcao send transforma em JSON automaticamente
// })
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//se tirar o nome /produtos e trocar 
//'get' por 'use' deixar apenas a funcao, é possivel chamar com qualquer nome no postman
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// -> (testar)
// app.use((req, res, next) => {
//     res.send({nome: 'Notebook', preco: 123.45})
// })
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(porta, () => {
    console.log(`Servidor ainda está executando na porta ${porta}.`)
})

