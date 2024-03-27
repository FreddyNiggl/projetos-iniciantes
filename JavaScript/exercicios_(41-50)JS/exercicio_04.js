meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
qual_o_mes = function(numero_do_mes) {
    resultado = meses[numero_do_mes - 1]
    return resultado
}
numero_do_mes = 12
console.log(qual_o_mes(numero_do_mes))