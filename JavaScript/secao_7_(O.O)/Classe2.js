class avo {
    constructor(sobrenome, idade = 23) {
        this.sobrenome = sobrenome
        this.idade = idade
    }
}


class pai extends avo {
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class filhote extends pai {
    constructor() {
        super('Silva')
    }
}

const paizao = new pai
const filho = new filhote
console.log(paizao)