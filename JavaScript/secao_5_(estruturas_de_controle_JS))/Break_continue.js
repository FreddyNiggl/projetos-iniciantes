const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for ( let x in numeros) {
    if(x == 5) {
        break
    }
    console.log(`${x} = ${numeros[x]}`)
}

for ( let y in numeros) {
    if (y == 5 ) {
        continue        
    }
    console.log(y, 'é = ', numeros[y])
}

externo: for (let b in numeros) {
    for ( let a in numeros) {
        //console.log('Par: ', b, ', ', a)
        if (b == 2 && a == 3) break externo
       // console.log('a = ', a, 'b = ', b)
        console.log('Par: ', b, ', ', a)
    }

}

