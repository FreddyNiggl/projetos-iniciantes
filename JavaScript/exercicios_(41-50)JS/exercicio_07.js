entre_numeros = function(numero, minimo, maximo, inclusivo=false) 
{
    if(inclusivo) 
    {
        return numero >= minimo && numero <= maximo

    }

    return numero > minimo && numero < maximo
}

incluir = true
console.log(entre_numeros(3, 5, 100, incluir))

