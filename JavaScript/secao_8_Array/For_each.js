const aprovados = ['sabrina', 'freddy', 'caio', 'elano']

 aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1} ${nome} - ${array}`)
 })

 aprovados.forEach(nome => console.log(nome))
 
//  const exibir_aprovados = aprovado => console.log(aprovado)
//  aprovados.forEach(exibir_aprovados)

const exibir_aprovados = otarios => console.log(otarios)
aprovados.forEach(exibir_aprovados)