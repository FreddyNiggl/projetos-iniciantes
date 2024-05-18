Arra = ["oi", 2, 45.6, "deixe", true, -2.1, 24]

function primulti () 
{
primeiro = 0
ultimo = Arra.length - 1

primeiro_item = Arra[primeiro]
ultimo_item = Arra[ultimo]

return `${primeiro_item}, ${ultimo_item}`

}

console.log(primulti())

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Arra = ["oi", 2, 45.6, "deixe", true, -2.1, 24]

// primulti = function(Arra) 
// {
// primeiro_item = Arra.shift()
// ultimo_item = Arra.pop()


// return [primeiro_item , ultimo_item]
// }

// console.log(primulti(Arra))


