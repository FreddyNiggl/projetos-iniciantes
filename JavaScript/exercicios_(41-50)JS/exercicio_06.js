const conversao = function(valor) {
    tipo = typeof(valor)

    if (typeof(valor) == "boolean")
    {
        return !valor
    } 
    else if (typeof(valor) == "number")
    {
        return -valor
    }
    else
    {
        return ("Esperasse um valor numerico ou booleando, mas o tipo é String")
    }
}

dado_passado = "cageuei"

console.log(conversao(dado_passado))