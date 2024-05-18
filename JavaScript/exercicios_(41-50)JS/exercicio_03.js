calcular_salario = function(total_horas, ganho_por_hora) {
    total = total_horas * ganho_por_hora
    return `Salário igual a $${total}`
}

console.log(calcular_salario(150, 40.5))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const salario_liquido = function(horas_total, valor_hora) {
    const valor_bruto = horas_total * valor_hora
    const valor_liquido = valor_bruto * 0.7
    return (`"Salário líquido é igual a R$ ${valor_liquido.toFixed(2)}"`) 
}

horas = 10
valor = 5.34

console.log(salario_liquido(horas, valor))