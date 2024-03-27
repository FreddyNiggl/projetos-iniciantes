const quase_array = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quase_array)
Object.defineProperty(quase_array, 'nao_sei_pra_que_serve_isso', {
    value: function() { return Object.values(this) },
    //enumerable: false
})

console.log(quase_array[0])

const Meu_array = ['Rafael', 'Ana', 'Bia']
console.log(quase_array. nao_sei_pra_que_serve_isso(), Meu_array)