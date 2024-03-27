// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag:'promocao'
})

console.log('Extensivel: ', Object.isExtensible(produto))
// Não é possivel adicionar nehunha nova KEY porem é possivel alterar e deletar
produto.nome = 'Borracha'
produto.descricao = 'É uma borracha branca'
delete produto.tag
produto.tag = 'acabou'// nao é possivel add uma vez que ja se tirou
console.log(produto)

//Objecto Seal
//Nao é possivel adicioanr ou remover KEYs apenas alterar os valores ou modificar
const pessoa = {nome: 'JUliana', idade: 32}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Marques'
delete pessoa.nome
pessoa.idade = 29 // é possivel apenas alterar os valores/nomes
console.log(pessoa)

//Object.freeze = Selado + Valores constantes !!!