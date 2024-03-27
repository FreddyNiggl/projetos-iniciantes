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


//factory
const criar_pessoa = name => {
    return {
        falar: () => console.log(`Meu nome é: ${name}`)
    }
}

const p2 = new Pessoa('maria')

p2.falar()
