const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

//desafio 1 - todos os alunos sao bolsistas?
const todos_sao_bolsistas = (elemento_armazenador, bolsa) => elemento_armazenador && bolsa
console.log(alunos.map(elemento => elemento.bolsista).reduce(todos_sao_bolsistas))

//desafio 2 - Algum aluno é bolsista?
const algum_bolsista = (item_armazenador, bolsista) => item_armazenador || bolsista
console.log(alunos.map(item_escolhido => item_escolhido.bolsista).reduce(algum_bolsista))