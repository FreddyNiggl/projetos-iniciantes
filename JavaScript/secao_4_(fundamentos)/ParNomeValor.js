const saudacao = 'OPA!!!' // contexto lexico 1

function executar() {
    const saudacao = 'Fallaaa' //contexto lexico 2
    return saudacao
}

//Objtos sao conjuntos formadors por parec de Nome/Valor
const dados = {
    nome: 'Sabrina',
    idade: 21,
    peso: 18,
    endereco: {
        logradouro: 'rua marques',
        numero: 123
    }
}   
console.log(saudacao)
console.log(executar())
console.log(dados)