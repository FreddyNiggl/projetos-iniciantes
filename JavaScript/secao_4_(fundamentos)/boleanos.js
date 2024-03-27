let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)

// valores verdadeiros
console.log('OS verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'afdvaaca')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))
 
// valores falsos
console.log('os falos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))



