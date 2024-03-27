function get_price(imposto = 0, moeda = 'R$') {
    return `${moeda} -> ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    get_price
}

global.preco = 20
global.desc = 0.1

console.log(get_price())

console.log(produto.get_price())

const carro = {preco: 49990, desc: 0.20}

console.log(get_price.call(carro))
console.log(get_price.apply(carro))

console.log(get_price.call(carro, 0.17, '$'))
console.log(get_price.apply(carro, [0.17, 'yen'] ))

