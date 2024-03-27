function aula (nome, id_nome) {
    this.nome = nome
    this.id_nome = id_nome
}

const aula1 = new aula ('Bem Vindo', 123)
const aula2 = new aula ('Ate logo', 456)

console.log(aula1, aula2)

//simulando o NEW
function novo(funcao, ...parametros) {
    const obj = {}
    obj.__proto__ = funcao.prototype
    funcao.apply(obj, parametros)
    return obj
}

const aula3 = novo(aula, 'Bem vindo', 123) 
const aula4 = novo(aula, 'Ate logo', 456)

console.log(aula3, aula4)
