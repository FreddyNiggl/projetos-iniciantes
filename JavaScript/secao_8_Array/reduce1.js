const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
//alterar o elemento.nome para elemento.nota ou elemento.bolsista - define com o que vc quer trabalhar 
console.log(alunos.map(elemento => elemento.nome))
console.log(alunos.map(elemento => elemento.nota))
console.log(alunos.map(elemento => elemento.bolsista))

//map é muito bem utilizado para selecionar determinado item de um ARRAY
const resultado =  alunos.map(elemento => elemento.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, )
console.log(resultado)