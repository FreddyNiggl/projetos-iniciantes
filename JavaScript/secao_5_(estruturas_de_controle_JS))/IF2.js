function teste1(num) {
    if(num > 7)
        console.log(num)
    console.log('final..')
}

teste1(6)
teste1(8)


//codigo 'ERRADO'
function teste2(valor) {
    if(valor > 7); {//tomar cuidado com ' ; ' NAO usar em estrutuas de controle.
        console.log(valor)
    }
}

teste2(6)
teste2(8)