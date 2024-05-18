const repeticao  = function(a,x) 
{
lista = []

    for (i = 1; i <= x; i++)
    {
        lista.push(a)
    }

return lista 
}

oq = "love"
vezes = 17
console.log(repeticao(oq, vezes))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function repeticao (item, quantidade) 
// {


// return Array(quantidade).fill(item)
// }


// i = 'beber agua'
// x = 9
// console.log(repeticao(i, x))