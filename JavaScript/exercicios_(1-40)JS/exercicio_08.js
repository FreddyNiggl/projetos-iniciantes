/* Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

const jogos = [10, 20, 20, 8, 25, 3, 0, 30, 1]
function pontuacao() {
    maior_ponto = jogos[0]
    vezes_beteu_record = 0
    menor_ponto = jogos[0]
    vez_da_menor_pontuacao = 0
    for (i = 0; i < jogos.length; i++) {

        if (jogos[i] > jogos[i - 1]) {
            maior_ponto = jogos[i]
            vezes_beteu_record += 1
        }
        if (jogos[i] < jogos[i - 1] && jogos[i] < menor_ponto) {
            menor_ponto = jogos[i]
            //if(jogos[i] < vez_da_menor_pontuacao)
            vez_da_menor_pontuacao = [i+1]
        }

        console.log(maior_ponto, menor_ponto)
        console.log(`Você bateu seu record ${vezes_beteu_record}`)
        console.log(`Sua menor pontuacao foi na ${vez_da_menor_pontuacao}º`)
    }
}

pontuacao()



// const nota = [4.4, 5.6, 7.2, 9.7, 2.4]
// for (i = 0; i < nota.length; i++) {
//     console.log(`Nota é = ${nota[i]}.` )
// }
