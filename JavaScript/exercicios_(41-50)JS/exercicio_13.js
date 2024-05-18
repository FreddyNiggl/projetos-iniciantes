let arra = ["Javascript", 1, "3", "Web", 20]

numeros = function (array) {
    resultado = []

    for (i = 0; i <= array.length; i = i + 1) {
        if (typeof array[i] === "number") {
            resultado.push(array[i])
        }
    }
    return resultado
}

console.log(numeros(arra))





