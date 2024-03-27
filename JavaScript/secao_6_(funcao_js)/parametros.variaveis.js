function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]        
    }
    console.log(soma)
}

soma()
soma(2, 3, 4 , 5, 6, 7, 8, 9, 11)
soma(2, 3)
soma(2)

soma('tem ', 2, ' numeros')