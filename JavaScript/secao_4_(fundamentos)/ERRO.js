function tratar_erro_lancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'errou mane'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date

    }
}

function imprimir_nome_grifado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratar_erro_lancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'roberto'}
imprimir_nome_grifado(obj)