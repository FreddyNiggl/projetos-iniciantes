//Usando notacao literal
const objt1 = {}
console.log(objt1)

//Objeto em JS
console.log(typeof Object, typeof new Object)

const objt2 = new Object
console.log(objt2)

//funcoes construtoras
function produto(nome, preco, desconto) {
    this.nome = nome
    this.preco_com_desconto = () => {
        return preco * (1 - desconto)
    }
}

const produto1 = new produto('caneta', 7.99, 0.15)
const produto2 = new produto('notebook', 2899.9, 0.25)

console.log(produto1.preco_com_desconto(), produto2.preco_com_desconto())

//Funcao Factory
function criar_funcionario (nome, base_salario, faltas) {
    return {
        nome,
        base_salario,
        faltas,
        salario_final () {
            return (base_salario / 30) * (30 - faltas)
        }
    }
}
console.log()

const funcionario_1 = criar_funcionario('Freddy', 8993, 3)
const funcionario_2 = criar_funcionario('Sabrina', 49494, 15)

console.log(funcionario_1.salario_final(), funcionario_2.salario_final())
console.log()

//Object.create
const filha = Object.create(null)
filha.nome = 'ANA'
console.log(filha)

//uma funvao famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)
