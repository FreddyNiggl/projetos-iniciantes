function compras(job1, job2) {
const icecream = job1 || job2
const tv50 = job1 && job2
//const tv32 = !!(job1 ^ job) //bitwise xor
const tv32 = job1 != job2
const fitness = !icecream

return { icecream, tv50, tv32, fitness }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

/**
 *  ||  usado para ''ou um ou outro''
 *  && usado para ''um e outro''
 *  != usado pra ''ou (diferente) do outro'')
 *  ! usado para ''diferente(contrario)''
 * 
 * 
 */