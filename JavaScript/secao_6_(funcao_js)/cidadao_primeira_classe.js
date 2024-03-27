// Criar de forma literal
function fun1() {}

// Armazenar funcao em variavel
function fun2() {}

//Armazenar em um Array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))


//Armazenar em um atributo de objeto vazio
const obj = {} 
obj.falar = function () {return 'OPAIII'}
console.log(obj.falar())

//passar funcao como parametro
function run(fun) {}

//passar funcao como parametro
function run(fun) {
    fun()
}
run(function () {console.log('Executando...') })

//Uma funcao pode retornar ou conter uma funcao
function soma (a, b) {
    return function (c) {
        console.log('soma total: ', a + b + c)
    }
}

//soma(2, 4)(5)
const seismais = soma(2, 4)
seismais(5)