// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. 
// Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo 
// e retorne sua classificação quanto ao tamanho de seus lados.

// (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangulo (x, y, z) {
    if (x === y && y === z) { 
        console.log(`${x}, ${y}, ${z} é um triangulo equilátero`)
    } else if (x != y && x != z && z != y ) {
        console.log(`${x}, ${y}, ${z} é um triangulo escaleno`)
    } else {
        console.log(`${x}, ${y}, ${z} é um triangulo isósceles`)
    }

}

triangulo(5,3,5)
triangulo(2,3,4)
triangulo(2,2,2)
triangulo(7,7,6)