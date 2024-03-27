console.log(this === global)
console.log(this === module)

console.log(this === exports)
console.log(this === module.exports)

console.log()
function logthis() {
    console.log('dentro de uma funcao...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logthis()