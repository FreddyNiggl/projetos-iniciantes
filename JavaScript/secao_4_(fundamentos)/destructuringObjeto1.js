// novo recurso do ES2015

const pessoa = {
    nome: 'sabrina',
    idade: '21',
    endereco: {
        logradouro: 'Rua do Arrego',
        numero: '1000'
    } 
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: s, idade: i} = pessoa
console.log(s, i)

const { sobrenome, bem_humorado = true} = pessoa
//const {nome_completo{ sobrenome, bem_humorado = true}} = pessoa
console.log(sobrenome, bem_humorado)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const {endereco} = pessoa
console.log(endereco)