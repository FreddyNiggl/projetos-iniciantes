const express = require('express')
const app = express()
const bodyparser = require ('body-parser')

app.use(bodyparser.urlencoded({ extended: true}))

app.post('/usuarios', (receber, enviar) => {
    console.log(receber.body)
    enviar.send('<h1>Parabéns inscrição aceita!</h1>')
})

app.post('/usuarios/:id', (receber, enviar) => {
    console.log(receber.params.id)
    console.log(receber.body)
    enviar.send('<h1>Parabéns usuário alterado!</h1>')
})

app.listen(3003)