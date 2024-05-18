// const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

const { result } = require("lodash");

// const qual_mes = function(numero_mes) {
//     const resultado = meses[numero_mes - 1]
//     return console.log(`O numero ${numero} corresponde ao mes de ${resultado}.`)
// }

// const numero = 4
// console.log(qual_mes(numero))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const meses = function(numero_do_mes) {
   switch(numero_do_mes){
        case 1:
            return "janeiro";
        case 2:
            return "fevereiro";
        case 3:
            return "marco";
        case 4:
            return "abril";
        case 5:
            return "maio";
        case 6:
            return "junho";
        case 7:
            return "julho";
        case 8:
            return "agosto";
        case 9:
            return "setembro";
        case 10:
            return "outubro";
        case 11:
            return "novembro";
        case 12:
            return "dezembro";
    }   
    return `O numero do mes digitado se refere a ${meses(numero_do_mes)}`
}

console.log(meses(4))

