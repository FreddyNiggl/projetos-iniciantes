const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "kit de lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

//retornar um array apenas com os numeros


const transformar_em_objeto = json => JSON.parse(json)
const apenas_preco = elementos => elementos.preco

const resultado = carrinho.map(transformar_em_objeto).map(apenas_preco)
console.log(resultado)