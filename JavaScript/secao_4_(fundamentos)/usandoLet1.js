var numero = 1
{
    let numero = 2
    console.log('dentro', numero)
}
console.log('fora', numero)

// o LET procura/ por scoupo, se nao tiver no interno ele vai procurar no
// mais externo: 

var numero = 1
{
    let numero2 = 2
    console.log('dentro', numero)
}
console.log('fora', numero)