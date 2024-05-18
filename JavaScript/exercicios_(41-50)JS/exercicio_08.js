const multiplicacao = function() {

if(n1 == 0 || n2 == 0)
{
    return "Multiplicação com zero = 0"
}
else
{
    resultado = 0

    for (let i = 1; i <= n2; i++)
    {
        resultado = resultado + n1
    }
    return resultado
}
}

n1 = 11
n2 = 0

console.log(multiplicacao(n1,n2))