class Pessoa {
    constructor(name) {
        this.name = name
    }

    falar() {
        console.log(`Meu nome é: ${this.name}`)
    }
}

const p1 = new Pessoa('joao')
p1.falar()


//transformar essa classe(acima) em uma funcao factory(abaixo):


function pessoa (name) {
        this.name = name

    this.falar = function() {
        console.log(`Meu nome é: ${this.name}`)
    }
}

const p2 = new pessoa('joao')
p2.falar()