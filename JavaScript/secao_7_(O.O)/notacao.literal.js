const a = 1
const b = 2
const c = 3

const b1 = {a : a, b : b, c : c}
const b2 = {a, b, c}

console.log(b1, b2)


const att_chave = 'mamao'
const att_valor = 6.42

const obj3 = {}
obj3[att_chave] = att_valor
console.log(obj3)   

const obj4 = {[att_chave] : att_valor}
console.log(obj4)

const obj5 = {
    funcao1: function () {
        //.... como era utilizado antes
    },
    funcao2() {
        //.... como agora é feito
    }
}

console.log(obj5)