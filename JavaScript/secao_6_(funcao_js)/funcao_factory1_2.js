//funcao factory (simples)
function criar_pessoa() {
    return {
        obj : 'papel',
        valor : '1.30' 
    }
}

//console.log (criar_pessoa())

function criar_pessoa(nome, preco) {
    return {
        nome,
        preco 
    }
}


console.log(criar_pessoa('casa', '20.345'))