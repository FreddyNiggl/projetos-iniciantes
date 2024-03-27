//console.log(typeof console)
console.log(Math.ceil(6.1)) //arredonda para cima
console.log(Math.floor(6.1)) //arredonda para baixo

const obj1 ={}
obj1.nome = 'bola' // pode criar assim
//obj1['nome'] = 'bola2'
//obj1['idade'] = '1922' // pode criar assim tbm
console.log(obj1)
console.log(obj1.nome)

//THIS - serve para expor, tornar acessivel
//funcoes/atributos para fora de uma funcao.
function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}


const obj2 = new Obj('cadeira')
const obj3 = new Obj ('Mesa')
const a = new Obj('dedal')

console.log(obj2.nome)
console.log(obj3.nome)
a.exec()



