//console.log(global)
global.minha_app= Object.freeze({
    saudacao() {
        return 'Esotu em todos os lugares'
    },
    nome: 'Sistema legal'
})
//IMPORTANTE: funcao Objecte.freeze congela os valores impedindo que alteracoes sejam feitas mesmo no scoplo global.
