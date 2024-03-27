function carro(velocida_maxima = 200, ganho_de_aceleracao =  5) {
   //atributo privado
    let velocidade_atual = 0


    //atributo publico
    this.acelerar = function () {   
        if (velocidade_atual + ganho_de_aceleracao <= velocida_maxima) {
            velocidade_atual += ganho_de_aceleracao
        } else {
            velocidade_atual = velocida_maxima
        }   
    }

    //atributo publico
    this.getvelocidade_atual = function () {
        return velocidade_atual
    }
}

const uno = new carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getvelocidade_atual())

const ferrari = new carro (320, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidade_atual())
 