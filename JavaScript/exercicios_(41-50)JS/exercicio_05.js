// maior_ou_igual = function(numero_1, numero_2) {
//     if (numero_1 >= numero_2) {
//         console.log(true)
//     } else { console.log(false)}
// }


// numero_1 = 3
// numero_2 = 4
// maior_ou_igual(numero_1, numero_2)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const condicao = function(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) 
    {
        return false, "tipos diferentes"
    } 
    else  
    {
        return (primeiro >= segundo, primeiro, segundo)
    }
}

console.log (condicao(2, 5))