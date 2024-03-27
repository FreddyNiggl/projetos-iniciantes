// Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
// classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
// possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
// que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
// arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
// 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
// seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
// e o aluno será aprovado.



function aprovado_ou_desaprovado (nota) {
    if (nota <= 37) {
        console.log('O aluno está reprovado')
    } else {
        console.log('Aluno aprovado')
    }   
    if (nota % 5 > 2){
         nota += 5 - (nota % 5 )
         console.log(nota)
    } else {
         nota = nota
         console.log(nota)
    }
}

aprovado_ou_desaprovado(33)
aprovado_ou_desaprovado(100)
aprovado_ou_desaprovado(41)
aprovado_ou_desaprovado(29)
aprovado_ou_desaprovado(38)
aprovado_ou_desaprovado(37)
aprovado_ou_desaprovado(0)











// let numero = 78.75867;
//     let numbertest = numero.toFixed(2);
//     console.log(numbertest);

// Math.round(numbertest)

// console.log(Math.round(nota))
// a = Math.round(nota)
// console.log(nota.toFixed(2))
// b = nota.toFixed(1)
// console.log(Math.ceil(nota))
// c = Math.ceil(nota)