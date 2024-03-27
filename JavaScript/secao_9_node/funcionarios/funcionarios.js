const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menor_salario = (func, func_atual) => {
    return func.salario > func_atual.salario ? func : func_atual
}

axios.get(url).then(responsta => {
    const funcionarios = responsta.data
    //console.log(funcionarios)

    //mulher chinesa com o salario mais baixo

    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menor_salario)

    console.log(func)

})



