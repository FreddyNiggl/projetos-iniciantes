function preencher (item, vezes) 
{
resultado = " "

    for(i = 1; i <= vezes; i ++)
    {
        resultado = resultado + item + ", "

    }

return resultado
}

item = "+"
vezes = 5

console.log(preencher(item, vezes))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function repetir (vezes, item) 
// {
// return Array(vezes).fill(item)

// }

// vezes = 5
// item = " +, "

// console.log(repetir(vezes, item))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function repeticao (quantidade) 
//     {
//         return "+" .repeat(quantidade)
//     }

//     console.log(repeticao(4))