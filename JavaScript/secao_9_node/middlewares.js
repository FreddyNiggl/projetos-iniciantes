//middlewares - CHAIN OF RESPONSABILITY 
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

//observacao: entre parenteses se nomeia as variaveis, em seguida se trabalha com elas. 
// na funcao simplificada, voce nomeia a variavel que vi ser usada e em seguida diz o que vai ser feito com ela.

const exec = (ctx, ...middlewares) => {
    const exec_passo =  indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => exec_passo (indice + 1))
    }
    exec_passo(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
