const alunos = [
    {nome: 'Joao', nota: 7.9 },
    {nome: 'Maria', nota: 9.2 }
]


//imperativo

let total1 = 0 
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1/ alunos.length)


//Declarativo
const nota_escolar = aluno => aluno.nota
const soma_total = (total, atual) => total + atual

const total2 = alunos.map(nota_escolar).reduce(soma_total)
console.log(total2 / alunos.length)



