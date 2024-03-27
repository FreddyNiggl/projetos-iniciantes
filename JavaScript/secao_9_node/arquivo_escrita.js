const fs = require ('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivo_gerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})

//Como converter um OBj em JASON para gravar no disco de armazenamento
//nesse caso o arquivo foi salvo em um arquivo criado com o nome de 'arquivo_gerado.json'