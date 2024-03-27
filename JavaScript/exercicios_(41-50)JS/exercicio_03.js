calcular_salario = function(total_horas, ganho_por_hora) {
    total = total_horas * ganho_por_hora
    return `Salário igual a $${total}`
}

console.log(calcular_salario(150, 40.5))