const valor = 'global'

function minhafuncao () {
    //const valor = 'local'
    console.log(valor)
}

function exect() {
    const valor = 'local'
    minhafuncao()
}

exect()