Array.prototype.map2 = function(mane) {
    const new_array = []
    for (let i = 0; i < this.length; i++) {
        new_array.push(mane(this[i], i, this))
    }
    return new_array
}

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "kit de lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

//retornar um array apenas com os numeros


const transformar_em_objeto = json => JSON.parse(json)
const apenas_preco = elementos => elementos.preco

const resultado = carrinho.map2(transformar_em_objeto).map2(apenas_preco)
console.log(resultado)