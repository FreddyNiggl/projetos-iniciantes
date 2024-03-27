//closure é o escopo criado quando uma funcao é declarada
//esse escopo permite a funcao acessar e manipular variaveis externas à funcao

//contexto lexico em ação!

const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
    
}

const minhafuncao = fora()
console.log(minhafuncao())