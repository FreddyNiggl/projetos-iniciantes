//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "123"
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'} //O atributo é sobreescrito(tem preferencia pelo primeiro valor encontrado na cadeia)
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    vel_atual: 0,
    vel_maxima: 200,
    acelerar_mais () {
        if(this.vel_atual + this.acelerar_mais < this.vel_maxima) {
            this.vel_atual += this.acelerar_mais
        } else {
            this.vel_atual = this.vel_maxima
        }
    },
    status() {
        return `${this.vel_atual}km/h de ${this.vel_maxima}km/h`
    }

}

const ferrari = {
    modelo: 'V40',
    vel_maxima: 320, //shadowing(sobrescreve a variavel mais especifica > menos especififca)
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar_mais(300)
console.log(volvo.status())

ferrari.acelerar_mais(300)
console.log(ferrari.status())