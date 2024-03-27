// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 
// e retorne true ou false.


function divisor_3 (valor) {
    if (valor % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(divisor_3(6))
console.log(divisor_3(33))
console.log(divisor_3(45))
console.log(divisor_3(66))
console.log(divisor_3(345))
console.log(divisor_3(4))
console.log(divisor_3(32))
console.log(divisor_3(44))
console.log(divisor_3(56))