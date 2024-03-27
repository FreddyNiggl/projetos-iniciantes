// COlecao deinamica de pares chaves e valor:
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'fox',
    valor: 899900,    
    proprietario: {
        nome: 'Sabrina',
        idade: 21 ,
        endereco: {
            numero: 75,
            logradouro: 'AABB'
        }
    },
    condutores: [{
        nome: 'Freddy',
        idade: 26,
    }, {
        nome: 'Elano',
        idade: 28,  
    }, {
        nome: 'Mariana',
        idade: 22,
    }],

    calcular_valor_seguro: function() {
        //....
    }

}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcular_valor_seguro
console.log(carro)


console.log(carro.condutores)
console.log(carro.condutores.length)

