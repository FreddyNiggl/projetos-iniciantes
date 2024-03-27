const escola = 'c2d4r'
console.log(escola.charAt(4))
console.log(escola.charAt(0))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('4')

)
console.log(escola.substring(1))
console.log(escola.substring(1, 5))

console.log('escola '.concat(escola).concat(' !'))
console.log('escola ' + (escola) + (' !'))

console.log(escola.replace('4', 'e'))
console.log(escola.replace(4, 'e'))

console.log(escola.replace(/\d/g, 'e')) //substitui todos os digitos pela letra definida
console.log(escola.replace(/\d/, 'e')) //substitui apenas o primeiro digito pela letra definida

console.log(escola.replace(/\w/, 'e')) //substitui apenas a primeira letra pela letra definida
console.log(escola.replace(/\w/g, 'e')) //substitui todasa as letra pela letra definida


//transformar lista em ARRAY
console.log('Ana, MAria, Pedro'.split(','))
console.log('Ana,MAria,Pedro'.split(','))
console.log('Ana, MAria, Pedro'.split('_'))
console.log('Ana, MAria, Pedro'.split(/,/))





