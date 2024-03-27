const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma 2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const nota_de_aluno = estudante => estudante.nota   
const notas_da_escola = turma => turma.alunos.map(nota_de_aluno)

const notas_1 = escola.map(notas_da_escola)
console.log(notas_1)

console.log([].concat([  8.1, 9.3 ], [ 8.9, 7.3 ] ))


//criando funcao flapmap
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(notas_da_escola)
console.log(notas2)