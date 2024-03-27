let number1 =1
let number2 =2

number1++
++number1
console.log(number1)

--number1 
number1--
console.log(number1)

number1++
number2--
console.log('1=', number1, '2=', number2)


console.log(number1-- === ++number2) 

// sinal antes - a adicao ou a subtracao 
//é feita primeiro antes da comparacao;
// sinal depois - a comparacao é feita primeiro.

console.log('1=', number1, '2=', number2)
