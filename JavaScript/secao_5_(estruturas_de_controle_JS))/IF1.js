function so_boa_noticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com nota: ' + nota)
    }
}

so_boa_noticia(7.8)
so_boa_noticia(8.8)
so_boa_noticia(6.8)

function se_for_verdade(valor) {
    if(valor){
        console.log('E verdade...' + valor)
    }
}

se_for_verdade()
se_for_verdade(null)
se_for_verdade(undefined)
se_for_verdade(NaN)
se_for_verdade('')
se_for_verdade(0)
se_for_verdade(-1)
se_for_verdade(' ')
se_for_verdade('?')
se_for_verdade('?')
se_for_verdade('?')
se_for_verdade('[]')
se_for_verdade('[3, 4]')
se_for_verdade('{}')