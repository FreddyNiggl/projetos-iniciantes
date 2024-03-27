const notas = [4.4, 3.5, 6.7, 2.8, 9.1]

for (let i in notas) {
    console.log(`valor de ${i, notas[i]}`)
    console.log('valor de i: ', i,')', notas[i])
}

const pessoa =  {
    nome: 'sabrina',
    sobrenome: 'marques',
    idade: '21',
    peso: '62kg'
}

for (let caracter in pessoa) {
    console.log(`${caracter} = ${pessoa[caracter]}`)
}

