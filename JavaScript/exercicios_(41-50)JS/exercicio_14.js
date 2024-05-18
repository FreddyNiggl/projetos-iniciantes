    objeto = {
        nome: "sabrina",
        profissao: "desenvolvedora de app",
        idade: "21 anos",
        moradia: "Serra Talhada"
    }

    function objetoParaArray(objeto) {
        const chaves = Object.keys(objeto)
        const resultado = chaves.map( chave => [chave, objeto[chave]] )
        return resultado
    }

    console.log(objetoParaArray(objeto))

















// console.log(objeto.idade)
// console.log(objeto["idade"])


// objeto_array = function(novo_objeto){
//     resultado = []
//         for (let i in novo_objeto){
//             resultado.push([i, novo_objeto[i]])
//         }

//         return resultado
//     }


// console.log(objeto_array(objeto))







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const objeto_array = function(obj, item) {
//     let resultado = ""

//     for (let i in obj ){
//     if(obj.hasOwnProperty(i)) {
//         resultado += `${item}.${i} = ${obj[i]} \n` 
//     }
//     }
//     return resultado
// }

// console.log(objeto_array(objeto, "Namorada"))







    
    